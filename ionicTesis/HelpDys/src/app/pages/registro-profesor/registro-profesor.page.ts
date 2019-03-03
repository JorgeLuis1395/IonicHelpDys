import {Component, OnInit} from '@angular/core';
import {EstudiantesProvider} from '../../providers/estudiantes';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';


@Component({
    selector: 'app-registro-profesor',
    templateUrl: './registro-profesor.page.html',
    styleUrls: ['./registro-profesor.page.scss'],
})
export class RegistroProfesorPage implements OnInit {


    constructor(
        public restProvider: EstudiantesProvider,
        private toastCtrl: ToastController,
        public router: Router,
        public camera: Camera,
    ) {
    }

    nombre: '';
    apellido: '';
    email: '';
    telefono: '';
    fecha_nacimiento: '';
    amie: '';
    unidad_educativa: '';
    foto: '';
    fotos: any;
    contrasena: '';
    private base64Image: string;

    ngOnInit() {

    }


    saveUser() {
        this.restProvider.postProfesores(this.nombre, this.apellido, this.email, this.telefono, this.fecha_nacimiento, this.amie, this.unidad_educativa, this.base64Image, this.contrasena).then((result) => {
            console.log(result);
            this.showToast();
            this.router.navigateByUrl('');
        }, (err) => {
            console.log(err);
        });
    }

    showToast() {
        const toast = this.toastCtrl.create({
            message: 'User was created successfully',
            duration: 3000
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
