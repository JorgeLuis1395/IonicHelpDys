import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise'
import {Globals} from "./global";
@Injectable()
export class EstudiantesProvider {

    constructor(public http: HttpClient, public global:Globals){
    }
    
    getUsers() {
        return new Promise(resolve => {
            this.http.get(this.global.apiUrl+'/profesor',this.global.httpOptions).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }
    getAgenda() {
        return new Promise(resolve => {
            this.http.get(this.global.apiUrl+'/agenda', this.global.httpOptions ).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }
    getEstudiantes() {
        return new Promise(resolve => {
            this.http.get(this.global.apiUrl+'/estudiante', this.global.httpOptions).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }
    goToSessionDetail(sessionData: any) {
        return new Promise(resolve => {
            this.http.get(`http://localhost:3000/agenda/${sessionData.id}`).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });

    }
    postProfesores(nombre,apellido,email,telefono,fecha_nacimiento,amie,unidad_educativa,foto, contrasena) {
        let param = {nombre:nombre,apellido:apellido,email:email,telefono:telefono,fecha_nacimiento:fecha_nacimiento,amie:amie,unidad_educativa:unidad_educativa,foto:'https://cdn1.comohacerpara.com/imgn/08979-ser-persona-mejor-moralmente.jpg', contrasena:contrasena};
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl+'/profesor',param,this.global.httpOptions)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    postEstudiantes(nombre,apellido,email_representante,fecha_nacimiento,foto,grado,codigo_estudiante, contrasenia,telefono_representante,puntuacion) {
        let param = {nombre:nombre,apellido:apellido,email_representante:email_representante,fecha_nacimiento:fecha_nacimiento,grado:grado,codigo_estudiante:codigo_estudiante,contrasenia:contrasenia,telefono_representante:telefono_representante,foto:'https://cdn1.comohacerpara.com/imgn/08979-ser-persona-mejor-moralmente.jpg', puntuacion:'0'};
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl+'/estudiante', param, this.global.httpOptions)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    postAgenda(fecha,nombre,hora_inicio,hora_fin,ubicacion,etiqueta,descripcion, profesorId) {
        let param = {fecha:fecha,nombre:nombre,hora_inicio:hora_inicio,hora_fin:hora_fin,ubicacion:ubicacion,etiqueta:etiqueta,descripcion:descripcion, profesorId:profesorId};
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl+'/agenda', param, this.global.httpOptions)
                .subscribe(res => {
                    resolve(res);

                }, (err) => {
                    reject(err);
                });
        });
    }
}
