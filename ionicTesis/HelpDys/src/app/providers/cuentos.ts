import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise'
import {Globals} from "./global";
@Injectable()
export class CuentosProvider {

    constructor(public http: HttpClient, public global: Globals){
    }
    apiUrl = 'http://200.124.230.132:3100';
    getCuentos() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'/cuentos').subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getCuentosId() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/cuentos/'+ this.global.idCuento,
                {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

}