import { Component, OnInit } from '@angular/core';
import {EstudiantesProvider} from "../../providers/estudiantes";

@Component({
  selector: 'app-servicios1',
  templateUrl: './servicios1.page.html',
  styleUrls: ['./servicios1.page.scss'],
})
export class Servicios1Page implements OnInit {

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
