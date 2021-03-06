import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform } from '@ionic/angular';
import {EstudiantesProvider} from "../../providers/estudiantes";


declare var google: any;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapPage {
    constructor(public estudianteProvider: EstudiantesProvider ) {
        this.getUsers();
    }
    users: any;
    ngOnInit() {
    }
    getUsers() {
        this.estudianteProvider.getUsers()
            .then(data => {
                this.users = data;
                console.log(this.users);
            });
    }
}
