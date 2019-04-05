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
            this.http.get(this.global.apiUrl + '/profesor', {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getAgenda() {
        return new Promise(resolve => {
            this.http.get(this.global.apiUrl + '/agenda/' + this.global.idAgenda, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getEstudiantes() {
        return new Promise(resolve => {
            this.http.get(this.global.apiUrl + '/estudiante',{headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

    goToSessionDetail(sessionData: any) {
        return new Promise(resolve => {
            this.http.get(`http://200.124.230.132:3100/agenda/${sessionData.id}`).subscribe(data => {
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
            this.http.post(this.global.apiUrl + '/profesor', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
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
            this.http.post(this.global.apiUrl + '/estudiante', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    saveAgendaProfesor(
        usuarioId, agendaId,) {
        const param = {
            usuarioId,
            agendaId

        };
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl + '/agendaProfesor', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    postAgenda(fecha,fecha_fin, nombre, hora_inicio, hora_fin, ubicacion, etiqueta, descripcion) {
        let param = {
            fecha: fecha,
            fecha_fin: fecha_fin,
            nombre: nombre,
            hora_inicio: hora_inicio,
            hora_fin: hora_fin,
            ubicacion: ubicacion,
            etiqueta: etiqueta,
            descripcion: descripcion,
        };
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl + '/agenda', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
                .subscribe(res => {
                    resolve(res);

                }, (err) => {
                    reject(err);
                });
        });
    }


    postAgendaProfesor(usuarioId,agendaId,) {
        let param = {
            usuarioId: usuarioId,
            agendaId: agendaId,
        };
        console.log(param);
        return new Promise((resolve, reject) => {
            this.http.post(this.global.apiUrl + '/agenda', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
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
            this.http.post(this.global.apiUrl + '/estudiante/upload-image', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
