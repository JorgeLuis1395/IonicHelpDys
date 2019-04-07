import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";
import {DatosUsuarioProvider} from "../../providers/datosUsuario";
import {Globals} from "../../providers/global";
import {PopoverPageEstudiante} from "../info-popover/about-popover-estudiante";

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {
  estudiantes: any;
  calificaciones: any;
  constructor(public popoverCtrl: PopoverController, public  _estudiante: DatosUsuarioProvider, public global: Globals) { }

  ngOnInit() {
    this.consultar()
  }
  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPageEstudiante,
      event
    });
    await popover.present();
  }
  consultar() {
    this._estudiante.getEstudiante().then(data => {
      this.estudiantes = data;
      this.calificaciones = Object.values(data)[14];
      console.log(this.calificaciones)
      console.log(this.estudiantes);
    });
  }
}
