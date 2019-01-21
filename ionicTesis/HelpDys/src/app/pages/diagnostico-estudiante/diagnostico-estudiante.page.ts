import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-diagnostico-estudiante',
  templateUrl: './diagnostico-estudiante.page.html',
  styleUrls: ['./diagnostico-estudiante.page.scss'],
})
export class DiagnosticoEstudiantePage implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }
    onVideos() {
        this.router.navigateByUrl('rec/tabs/(videos:videos)');
    }
    onCuentos() {
        this.router.navigateByUrl('rec/tabs/(cuentos:cuentos)');
    }
    onJuegos() {
        this.router.navigateByUrl('rec/tabs/(juegos:juegos)');
    }
    onImagenes() {
        this.router.navigateByUrl('rec/tabs/(imagenes:imagenes)');
    }

}
