import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {PopoverPageEstudiante} from "../info-popover/about-popover-estudiante";
import {DatosUsuarioProvider} from "../../providers/datosUsuario";
import {Globals} from "../../providers/global";

@Component({
  selector: 'app-info-estudiante',
  templateUrl: './info-estudiante.page.html',
  styleUrls: ['./info-estudiante.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InfoEstudiantePage implements OnInit {
    usuario: any;
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
            this.usuario = data;
            console.log(this.usuario);
        });
    }
}
