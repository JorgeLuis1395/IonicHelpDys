import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise'
@Injectable()
export class EstudiantesProvider {

    constructor(public http: HttpClient){
        console.log("qwq");
    }
    apiUrl = 'http://localhost:3000';
    getUsers() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'/profesor').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }
    postProfesores(nombre,apellido,email,telefono,fecha_nacimiento,amie,unidad_educativa,foto, contrasena) {
        let param = {nombre:nombre,apellido:apellido,email:email,telefono:telefono,fecha_nacimiento:fecha_nacimiento,amie:amie,unidad_educativa:unidad_educativa,foto:'https://cdn1.comohacerpara.com/imgn/08979-ser-persona-mejor-moralmente.jpg', contrasena:contrasena};
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/profesor', param)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
    postEstudiante(nombre,apellido,email,telefono,fecha_nacimiento,amie,unidad_educativa,foto, contrasena) {
        let param = {nombre:nombre,apellido:apellido,email:email,telefono:telefono,fecha_nacimiento:fecha_nacimiento,amie:amie,unidad_educativa:unidad_educativa,foto:'https://cdn1.comohacerpara.com/imgn/08979-ser-persona-mejor-moralmente.jpg', contrasena:contrasena};
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/profesor', param)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}