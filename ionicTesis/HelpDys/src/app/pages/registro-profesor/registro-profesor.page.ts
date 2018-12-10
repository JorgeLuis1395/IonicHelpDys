import { Component, OnInit } from '@angular/core';
import {EstudiantesProvider} from "../../providers/estudiantes";
import {ToastController} from "@ionic/angular";
import {Router} from "@angular/router";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.page.html',
  styleUrls: ['./registro-profesor.page.scss'],
})
export class RegistroProfesorPage implements OnInit {
    nombre: '';
    apellido: '';
    email: '';
    telefono: '';
    fecha_nacimiento: '';
    amie: '';
    unidad_educativa:'';
    foto:'';
    fotos:any;
    contrasena:'' ;
  constructor(
      public restProvider: EstudiantesProvider,
      private toastCtrl: ToastController,
      public router: Router,
      public camera:Camera
  ) {

  }

  ngOnInit() {
  }

    saveUser() {
        this.restProvider.postProfesores(this.nombre,this.apellido,this.email,this.telefono,this.fecha_nacimiento,this.amie,this.unidad_educativa,this.foto, this.contrasena).then((result) => {
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


   /* callPostService(nombre,apellido,email,telefono,fecha_nacimiento,amie,unidad_educativa,foto, contrasena)
    {
        let p = this.restProvider.profesorPost(nombre,apellido,email,telefono,fecha_nacimiento,amie,unidad_educativa,foto, contrasena);
        p.then(data =>{
       this.netResponse = data.json().data;
    })
    }*/
}
