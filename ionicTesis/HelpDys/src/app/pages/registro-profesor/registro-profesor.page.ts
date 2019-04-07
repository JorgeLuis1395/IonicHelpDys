import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EstudiantesProvider} from '../../providers/estudiantes';
import {Router} from '@angular/router';
import {File, FileEntry} from '@ionic-native/File/ngx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {Storage} from '@ionic/storage';
import {FilePath} from '@ionic-native/file-path/ngx';
import {finalize} from 'rxjs/operators';
import {ActionSheetController, ToastController, Platform, LoadingController} from '@ionic/angular';
import {Camera, CameraOptions, PictureSourceType} from '@ionic-native/camera/ngx';
import {Globals} from "../../providers/global";


const STORAGE_KEY = 'my_images';

@Component({
    selector: 'app-registro-profesor',
    templateUrl: './registro-profesor.page.html',
    styleUrls: ['./registro-profesor.page.scss'],
})
export class RegistroProfesorPage implements OnInit {
    usuario: any;
    imgURL: any;
    public message: string;
    imagenEstudiante: File;

    nombre = "";
    apellido = "";
    email = "";
    nick = "";
    password = "";
    cedula = "";
    codigo_estudiante = "";
    fecha_nacimiento = "";
    grado : number;
    telefono = "";
    unidad_educativa = "";
    nombreFoto = "";
    amie = '';
    rol = "Prof";


    pathFotoProf: string;

    idEstudiante: number;
    aux: any;


    private base64Image: string;

    images = [];

    constructor(private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
                private actionSheetController: ActionSheetController, private toastController: ToastController,
                private storage: Storage, private plt: Platform, private loadingController: LoadingController,
                private ref: ChangeDetectorRef, private filePath: FilePath,
                public restProvider: EstudiantesProvider,
                public router: Router, public  global: Globals) {
        this.grado = 1;
    }

    ngOnInit() {
        this.plt.ready().then(() => {
            this.loadStoredImages();
        });
    }

    loadStoredImages() {
        this.storage.get(STORAGE_KEY).then(images => {
            if (images) {
                let arr = JSON.parse(images);
                this.images = [];
                for (let img of arr) {
                    let filePath = this.file.dataDirectory + img;
                    let resPath = this.pathForImage(filePath);
                    this.images.push({name: img, path: resPath, filePath: filePath});
                }
            }
        });
    }

    async selectImage() {
        const actionSheet = await this.actionSheetController.create(
            {
                header: "Seleccione el Recurso Para Cargar la Imagen",
                buttons: [{
                    text: 'Cargar desde Galería',
                    handler: () => {
                        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                    {
                        text: 'Tomar Foto',
                        handler:
                            () => {
                                this.takePicture(this.camera.PictureSourceType.CAMERA);
                            }
                    }
                    ,
                    {
                        text: 'Cancelar',
                        role:
                            'cancel'
                    }
                ]
            })
        ;
        await actionSheet.present();
    }

    pathForImage(img) {
        if (img === null) {
            return '';
        } else {
            let converted = this.webview.convertFileSrc(img);
            return converted;
        }
    }

    async presentToast(text) {
        const toast = await this.toastController.create({
            message: text,
            position: 'bottom',
            duration: 3000
        });
        toast.present();
    }


    takePicture(sourceType: PictureSourceType) {
        var options: CameraOptions = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };

        this.camera.getPicture(options).then(imagePath => {
            if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                        let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                        let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                    });
            } else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }
        });

    }

    createFileName() {
        var d = new Date(),
            n = d.getTime(),
            newFileName = n + ".jpg";
        return newFileName;
    }

    copyFileToLocalDir(namePath, currentName, newFileName) {
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
            this.updateStoredImages(newFileName);
        }, error => {
            this.presentToast('Error while storing file.');
        });
    }

    updateStoredImages(name) {
        this.storage.get(STORAGE_KEY).then(images => {
            let arr = JSON.parse(images);
            if (!arr) {
                let newImages = [name];
                this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            } else {
                arr.push(name);
                this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }

            let filePath = this.file.dataDirectory + name;
            let resPath = this.pathForImage(filePath);

            let newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };

            this.images = [newEntry, ...this.images];
            this.ref.detectChanges(); // trigger change detection cycle
        });
    }

    deleteImage(imgEntry, position) {
        this.images.splice(position, 1);

        this.storage.get(STORAGE_KEY).then(images => {
            let arr = JSON.parse(images);
            let filtered = arr.filter(name => name != imgEntry.name);
            this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

            this.file.removeFile(correctPath, imgEntry.name).then(res => {
                this.presentToast('File removed.');
            });
        });
    }

    startUpload(imgEntry) {
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(entry => {
                (<FileEntry>entry).file(file => this.readFile(file))
            })
            .catch(err => {
                this.presentToast('Error while reading file.');
            });
    }

    readFile(file: any) {

        const reader = new FileReader();
        reader.onloadend = () => {
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('image', imgBlob, file.name);
            this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    }

    async uploadImageData(formData: FormData) {


        const loading = await this.loadingController.create({
            //content: "Uploading image...",
        });
        await loading.present();

        this.http.post("http://200.124.230.132:3100/usuario/upload-image", formData, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
            .pipe(
                finalize(() => {
                    loading.dismiss();
                })
            )
            .subscribe(res => {

                this.pathFotoProf = Object.values(res)[1];
                alert("Imagen ingresada con éxito")

            });
    }


    guardar() {

        this.http.post('http://200.124.230.132:3100/usuario' ,
            {
                nombre: this.nombre,
                apellido: this.apellido,
                email: this.email,
                nick: this.nick,
                password: this.password,
                cedula: this.cedula,
                fecha_nacimiento: this.fecha_nacimiento,
                grado: this.grado.toString(),
                telefono: this.telefono,
                unidad_educativa: this.unidad_educativa,
                nombreFoto: this.pathFotoProf,
                amie: this.amie,
                rol: 'Prof',
            }, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
            alert('Registro de usuario correcto')

            const rutaHomeUsuario = [
                '/*',
            ];
            this.router.navigate(rutaHomeUsuario);
            this.ngOnInit();
        });

    }



    takePhoto() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }


}


