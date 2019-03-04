import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {PopoverController} from '@ionic/angular';

import {PopoverPage} from '../informacion-popover/about-popover';
import {DatosUsuarioProvider} from "../../providers/datosUsuario";
import {Globals} from "../../providers/global";

@Component({
    selector: 'page-about',
    templateUrl: 'about.html',
    styleUrls: ['./about.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AboutPage implements OnInit {
    usuario: any;
    idProfesor: string;
    private token: any;
    constructor(public popoverCtrl: PopoverController, public _usuario: DatosUsuarioProvider, public global: Globals) {
    }

    async presentPopover(event: Event) {
        const popover = await this.popoverCtrl.create({
            component: PopoverPage,
            event
        });
        await popover.present();
    }

    consultar() {
        this._usuario.getUsuario().then(data => {
            this.usuario = data;


            for (var i = 0; i < this.usuario.length; i++) {
                var value: string = this.usuario[i].getValue();
                var id: number = this.usuario[i].getId();

                console.log(value + id)
            }
        });
    }

    obtenerId(){
        console.log(this.idProfesor)
    }


    ngOnInit(): void {
        this.consultar()

        this.obtenerId()

    }
}
