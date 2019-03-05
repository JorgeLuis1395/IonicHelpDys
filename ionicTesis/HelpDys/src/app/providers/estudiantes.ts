import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Globals} from './global';

@Injectable()
export class EstudiantesProvider {

    constructor(public http: HttpClient, public global: Globals) {
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.global.tokenUsuario
        })
    };

    getUsers() {
        return new Promise(resolve => {
            this.http.get(this.global.apiUrl + '/profesor', this.httpOptions).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getAgenda() {
        return new Promise(resolve => {
            this.http.get(this.global.apiUrl + '/agenda/' + this.global.idProfesor, this.httpOptions).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getEstudiantes() {
        return new Promise(resolve => {
            this.http.get(this.global.apiUrl + '/estudiante', this.httpOptions).subscribe(data => {
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

    postProfesores(nombre, apellido, email, telefono, fecha_nacimiento, amie, unidad_educativa, foto, contrasena) {
        let param = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            fecha_nacimiento: fecha_nacimiento,
            amie: amie,
            unidad_educativa: unidad_educativa,
            foto: 'https://cdn1.comohacerpara.com/imgn/08979-ser-persona-mejor-moralmente.jpg',
            contrasena: contrasena
        };
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl + '/profesor', param, this.httpOptions)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    postEstudiantes(nombre, apellido, email, fecha_nacimiento, nick, grado, codigo_estudiante, cedula, telefono, unidad_educativa, nombreFoto, password) {
        let param = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            fecha_nacimiento: fecha_nacimiento,
            nick: nick,
            grado: grado,
            codigo_estudiante: codigo_estudiante,
            cedula: cedula,
            password: password,
            telefono: telefono,
            nombreFoto: 'https://cdn1.comohacerpara.com/imgn/08979-ser-persona-mejor-moralmente.jpg',
            unidad_educativa: unidad_educativa
        };
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl + '/estudiante', param, this.httpOptions)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    postAgenda(fecha, nombre, hora_inicio, hora_fin, ubicacion, etiqueta, descripcion, idProfesor) {
        let param = {
            fecha: fecha,
            nombre: nombre,
            hora_inicio: hora_inicio,
            hora_fin: hora_fin,
            ubicacion: ubicacion,
            etiqueta: etiqueta,
            descripcion: descripcion,
            idProfesor: idProfesor
        };
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl + '/agenda', param, this.httpOptions)
                .subscribe(res => {
                    resolve(res);

                }, (err) => {
                    reject(err);
                });
        });
    }

    postFoto(foto) {
        let param = {
            image: foto,
        };
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl + '/estudiante/upload-image', param, this.httpOptions)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
