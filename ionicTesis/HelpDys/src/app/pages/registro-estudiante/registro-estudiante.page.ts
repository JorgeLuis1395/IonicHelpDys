import { Component, OnInit } from '@angular/core';
import {ToastController} from "@ionic/angular";
import {EstudiantesProvider} from "../../providers/estudiantes";
import {Camera, CameraOptions} from "@ionic-native/camera/ngx";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.page.html',
  styleUrls: ['./registro-estudiante.page.scss'],
})

export class RegistroEstudiantePage implements OnInit {
    nombre: '';
    apellido: '';
    email_representante: '';
    telefono_representante: '';
    fecha_nacimiento: '';
    codigo_estudiante: '';
    grado: number;
    fotos:any;
    contrasenia:'' ;
    puntuacion:'';
  constructor(public restProvider: EstudiantesProvider,
              public router: Router,
              public camera:Camera) { this.grado = 1;}

  ngOnInit() {
  }
    saveEstudiante() {
        this.restProvider.postEstudiantes(this.nombre,this.apellido,this.email_representante,this.fecha_nacimiento,this.fotos,this.grado,this.codigo_estudiante,this.contrasenia, this.telefono_representante, this.puntuacion).then((result) => {
            console.log(result);
            this.router.navigateByUrl('app/tabs/(speakers:speakers)');
        }, (err) => {
            console.log(err);
        });
    }

    takePhoto(){
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.fotos  = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }
}
