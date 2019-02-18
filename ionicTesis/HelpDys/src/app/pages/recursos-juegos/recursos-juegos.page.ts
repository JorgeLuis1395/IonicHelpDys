import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recursos-juegos',
  templateUrl: './recursos-juegos.page.html',
  styleUrls: ['./recursos-juegos.page.scss'],
})
export class RecursosJuegosPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
    irAhorcado() {
        this.router.navigateByUrl('/jue/tabs/(ahorcado:ahorcado)');
    }
    irMemoria() {
        this.router.navigateByUrl('/jue/tabs/(memoria:memoria)');
    }

}
