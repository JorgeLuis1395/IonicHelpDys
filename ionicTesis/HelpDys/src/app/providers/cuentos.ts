import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise'
@Injectable()
export class CuentosProvider {

    constructor(public http: HttpClient){
    }
    apiUrl = 'http://localhost:3000';
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

}