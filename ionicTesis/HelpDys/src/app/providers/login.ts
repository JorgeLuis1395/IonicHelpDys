import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise'
@Injectable()
export class LoginProvider {

    constructor(public http: HttpClient){
    }
    apiUrl = 'http://localhost:3000';



    postLogin(nick,password) {
        let param = {nick:nick, password:password};
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/autenticacion', param)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    postLoginEst(nick,password) {
        let param = {nick:nick, password:password};
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/autenticacionestudiante', param)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
