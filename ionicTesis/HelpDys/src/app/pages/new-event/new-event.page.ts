import {Component, OnInit} from '@angular/core';
import {EstudiantesProvider} from '../../providers/estudiantes';
import {Router} from '@angular/router';
import {Globals} from '../../providers/global';

@Component({
    selector: 'app-new-event',
    templateUrl: './new-event.page.html',
    styleUrls: ['./new-event.page.scss'],

})
export class NewEventPage implements OnInit {
    etiqueta: string;
    nombre: '';
    fecha: '';
    fecha_fin: '';
    hora_inicio: '';
    hora_fin: '';
    ubicacion: '';
    descripcion: '';

    idAgenda: number;

    citas: any;
    aux: any
    miArray: any;

    constructor(
        public restProvider: EstudiantesProvider, public global: Globals,
        public router: Router,
    ) {
        this.etiqueta = 'reuniones';
    }

    ngOnInit() {
    }

    select() {
        console.log(this.etiqueta);
    }

    saveEvent() {
        this.restProvider.postAgenda(this.fecha,this.fecha_fin, this.nombre, this.hora_inicio, this.hora_fin, this.ubicacion, this.etiqueta, this.descripcion).then((result) => {
            console.log(result);
            console.log(Object.values(result)[1][0]);
            this.aux = Object.values(result)[1][0];
            this.idAgenda = parseInt(Object.values(this.aux)[0].toString());

            this.profesorEstudiante();

            this.router.navigateByUrl('app/tabs/(schedule:schedule)');
        }, (err) => {
            console.log(err);
        });
    }

    profesorEstudiante() {
        console.log(this.global.idProfesor)
        console.log(this.idAgenda)
        this.restProvider.saveAgendaProfesor(this.global.idProfesor,
            this.idAgenda,
        ).then((result) => {
            result
            console.log(result)
            alert("Evento Registrado Satisfactoriamente");
        }, (err) => {
            alert("No se pudo registrar el Evento");
        });
    }
}
