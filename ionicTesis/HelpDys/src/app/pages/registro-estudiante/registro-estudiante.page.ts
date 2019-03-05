import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {EstudiantesProvider} from '../../providers/estudiantes';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registro-estudiante',
    templateUrl: './registro-estudiante.page.html',
    styleUrls: ['./registro-estudiante.page.scss'],
})

export class RegistroEstudiantePage implements OnInit {
    nombre: '';
    apellido: '';
    email: '';
    nick: '';
    password: '';
    cedula: '';
    codigo_estudiante: '';
    fecha_nacimiento: '';
    grado: number;
    telefono: '';
    unidad_educativa: '';
    nombreFoto: '';
    private base64Image: string;

    constructor(public restProvider: EstudiantesProvider,
                public router: Router,
                public camera: Camera) {
        this.grado = 1;
    }

    ngOnInit() {
    }

    saveEstudiante() {
        this.restProvider.postEstudiantes(this.nombre, this.apellido, this.email, this.fecha_nacimiento, this.nick, this.grado, this.codigo_estudiante, this.cedula, this.telefono, this.unidad_educativa, this.nombreFoto, this.password).then((result) => {
            console.log(result);
            this.router.navigateByUrl('app/tabs/(speakers:speakers)');
        }, (err) => {
            console.log(err);
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
