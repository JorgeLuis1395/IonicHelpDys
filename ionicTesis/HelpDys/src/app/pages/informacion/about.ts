import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {PopoverController} from '@ionic/angular';

import {PopoverPage} from '../informacion-popover/about-popover';
import {DatosUsuarioProvider} from '../../providers/datosUsuario';
import {Globals} from '../../providers/global';

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
            this.global.idProfesor = Object.values(data)[0];
        });
    }

    ngOnInit(): void {
        this.consultar();

    }
}
