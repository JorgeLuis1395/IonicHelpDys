import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import {EstudiantesProvider} from "../../providers/estudiantes";
import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl";
import {Globals} from "../../providers/global";
import {DatosUsuarioProvider} from "../../providers/datosUsuario";

@Component({
    selector: 'page-speaker-list',
    templateUrl: 'speaker-list.html',
    styleUrls: ['./speaker-list.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SpeakerListPage {
    speakers: any[] = [];
    estudiantes: any;
    constructor(
        public actionSheetCtrl: ActionSheetController,
        public confData: ConferenceData,
        public router: Router,
        public estudianteProvider: DatosUsuarioProvider,
        public global: Globals
    ) {this.getEstudiante()}

    ionViewDidEnter() {
        this.confData.getSpeakers().subscribe((speakers: any[]) => {
            this.speakers = speakers;
        });
    }

    goToSpeakerTwitter(speaker: any) {

    }

    async openSpeakerShare(speaker: any) {
        const actionSheet = await this.actionSheetCtrl.create({
            header: ' ' + speaker.name,
            buttons: [
                {
                    text: 'Copy Link',
                    handler: () => {
                        console.log(
                            'Copy link clicked on https://twitter.com/' + speaker.twitter
                        );
                        if (
                            (window as any)['cordova'] &&
                            (window as any)['cordova'].plugins.clipboard
                        ) {
                            (window as any)['cordova'].plugins.clipboard.copy(
                                'https://twitter.com/' + speaker.twitter
                            );
                        }
                    }
                },
                {
                    text: 'Share via ...'
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });

        await actionSheet.present();
    }

    async openContact(estudiantes: any) {
        const mode = 'ios'; // this.config.get('mode');

        const actionSheet = await this.actionSheetCtrl.create({

            header: 'Contacto ' + estudiantes.nombre,
            buttons: [
                {
                    text: `Email ( ${estudiantes.email} )`,
                    icon: mode !== 'ios' ? 'mail' : null,
                    handler: () => {
                        window.open('mailto:' + estudiantes.email);
                    }
                },
                {
                    text: `Telefono ( ${estudiantes.telefono} )`,
                    icon: mode !== 'ios' ? 'call' : null,
                    handler: () => {
                        window.open('tel:' + estudiantes.telefono);
                    }
                }
            ]
        });

        await actionSheet.present();
    }
    getEstudiante() {
        this.estudianteProvider.getUsuario()
            .then(data => {
                this.estudiantes = Object.values(data)[14];

            });
    }
    async openNewEvent() {
        this.router.navigateByUrl('/app/tabs/(speakers:estudiante)');
    }

    guardarNick(nick){
        this.global.nombreEstudiante = nick;
        this.router.navigateByUrl(`app/tabs/(speakers:speaker-details/${nick})`);

    }
}
