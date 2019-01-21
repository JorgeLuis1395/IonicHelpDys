import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise'
@Injectable()
export class EstudiantesProvider {

    constructor(public http: HttpClient){
    }
    apiUrl = 'http://200.124.230.132:3100';
    getUsers() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'/profesor').subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }
    getAgenda() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'/agenda').subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }
    getEstudiantes() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'/estudiante').subscribe(data => {
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
            this.http.post(this.apiUrl+'/profesor', param)
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
            this.http.post(this.apiUrl+'/estudiante', param)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    postAgenda(fecha,nombre,hora_inicio,hora_fin,ubicacion,etiqueta,descripcion) {
        let param = {fecha:fecha,nombre:nombre,hora_inicio:hora_inicio,hora_fin:hora_fin,ubicacion:ubicacion,etiqueta:etiqueta,descripcion:descripcion};
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/agenda', param)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}