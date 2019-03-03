import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {UserData} from '../../providers/user-data';

import {UserOptions} from '../../interfaces/user-options';
import {MenuController} from '@ionic/angular';
import {EstudiantesProvider} from '../../providers/estudiantes';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    styleUrls: ['./login.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginPage implements OnInit{
    login: UserOptions = {username: '', password: ''};
    submitted = false;
    perfil: string;
    profesor: any;
    ngOnInit() {
        this.consultarProfesor();
    }
    constructor(
        public menu: MenuController,
        public userData: UserData,
        public router: Router,
        private _profesor: EstudiantesProvider
    ) {
        this.perfil = 'p';
    }

    select() {
        if (this.perfil == 'e') {
            this.router.navigateByUrl('est/tabs/(inicio:inicio)');
        }
        if (this.perfil == 'p') {
            this.consultarProfesor();
            this.router.navigateByUrl('app/tabs/(about:about)');
        }
    }

    onLogin() {
        if (this.perfil == 'e') {
            this.router.navigateByUrl('est/tabs/(inicio:inicio)');
        }
        if (this.perfil == 'p') {
            this.router.navigateByUrl('app/tabs/(about:about)');
        }
    }

    onSignup() {
        this.router.navigateByUrl('/signup');
    }

    consultarProfesor() {
        this._profesor.getUsers().then(data => {
            this.profesor = data;
            console.log(this.profesor);
        });

        for (const valor of this.profesor) {
            console.log("Valor: " + valor);
        }
    }


}
