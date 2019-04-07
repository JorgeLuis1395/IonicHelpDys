import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise'
import {Globals} from "./global";

@Injectable()
export class DatosUsuarioProvider {

    constructor(public http: HttpClient, public global: Globals) {
    }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.global.tokenUsuario
        })
    };


    getUsuario() {
        return new Promise(resolve => {
            this.http.get(this.global.apiUrl + '/usuario/'+this.global.nick, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getEstudiante() {
        return new Promise(resolve => {
            this.http.get(this.global.apiUrl + '/estudiante/'+this.global.nick, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

}