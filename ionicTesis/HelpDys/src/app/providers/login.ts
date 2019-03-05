import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Globals} from './global';

@Injectable()
export class LoginProvider {

    constructor(public http: HttpClient, public global: Globals) {
    }

    apiUrl = 'http://192.168.1.9:3000';


    postLogin(nick, password) {
        let param = {nick: nick, password: password};
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl + '/autenticacion', param)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    postLoginEst(nick, password) {
        let param = {nick: nick, password: password};
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl + '/autenticacionestudiante', param)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
