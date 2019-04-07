import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {UserData} from '../../providers/user-data';

import {UserOptions} from '../../interfaces/user-options';
import {AlertController, MenuController} from '@ionic/angular';
import {EstudiantesProvider} from '../../providers/estudiantes';
import {LoginProvider} from "../../providers/login";
import {Globals} from "../../providers/global";
import {tokenize} from "@angular/compiler/src/ml_parser/lexer";

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
    tokenProfesor: any;
    ngOnInit() {
    }
    constructor(
        public menu: MenuController,
        public userData: UserData,
        public router: Router,
        private _login: LoginProvider,
        private global: Globals,
        public alertController: AlertController,
    ) {
        this.perfil = 'p';
    }

    nick: '';
    password: '';


    select() {
        if (this.perfil == 'e') {
            this.router.navigateByUrl('est/tabs/(inicio:inicio)');
        }
        if (this.perfil == 'p') {
            this.router.navigateByUrl('app/tabs/(about:about)');
        }
    }

    onLogin() {

        if (this.perfil == 'e') {
            this.sendLoginEst()
            console.log(this.global.nick)

        }
        if (this.perfil == 'p') {
            this.sendLogin()

        }
    }

    onSignup() {
        this.router.navigateByUrl('/signup');
    }

    sendLogin() {

        this._login.postLogin(this.nick, this.password).then((result) => {
            this.global.nick = this.nick;
            this.global.tokenUsuario = Object.values(result)[0];

            console.log( this.global.tokenUsuario)
            this.router.navigateByUrl('app/tabs/(about:about)');
        }, (err) => {
            this.presentAlertIncorrecto();
            console.log(err);
        });
    }

    sendLoginEst() {
        this._login.postLoginEst(this.nick, this.password).then((result) => {
            this.global.nick = this.nick;
            this.global.tokenUsuario = Object.values(result)[0];
            this.router.navigateByUrl('est/tabs/(inicio:inicio)');

        }, (err) => {
            this.presentAlertIncorrecto();
            console.log(err);
        });
    }

    async presentAlertIncorrecto() {
        const alert1 = await this.alertController.create({
            header: 'Datos Incorrectos!',
            message: 'Error de Inicio de Sesión revisa los siguientes campos: Rol, Nick, Contraseña',
            buttons: [
                {
                    text: 'Volver a intentarlo',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        window.location.reload();
                    }
                }, {
                    text: 'Registrarse',
                    handler: () => {
                        this.router.navigateByUrl('/registroProfesor');
                    }
                }
            ]
        });

        await alert1.present();
    }

}
