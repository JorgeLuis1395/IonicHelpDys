import { Component, OnInit } from '@angular/core';
import {EstudiantesProvider} from "../../providers/estudiantes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],

})
export class NewEventPage implements OnInit {
    etiqueta: string;
    nombre: '';
    fecha: '';
    hora_inicio:'';
    hora_fin:'';
    ubicacion:'';
    descripcion:'';

  constructor(
      public restProvider: EstudiantesProvider,
      public router: Router,
  ) {this.etiqueta = 'reuniones'; }

  ngOnInit() {
  }
    select(){
        console.log(this.etiqueta)
    }
    saveEvent() {
        this.restProvider.postAgenda(this.fecha,this.nombre,this.hora_inicio,this.hora_fin,this.ubicacion,this.etiqueta,this.descripcion).then((result) => {
            console.log(result);
            this.router.navigateByUrl('app/tabs/(schedule:schedule)');
        }, (err) => {
            console.log(err);
        });
    }
}
