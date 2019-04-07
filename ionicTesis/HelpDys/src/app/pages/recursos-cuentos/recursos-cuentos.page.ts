import { Component, OnInit } from '@angular/core';
import {CuentosProvider} from "../../providers/cuentos";
import {Globals} from "../../providers/global";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recursos-cuentos',
  templateUrl: './recursos-cuentos.page.html',
  styleUrls: ['./recursos-cuentos.page.scss'],
})
export class RecursosCuentosPage implements OnInit {

  constructor(private cuentos: CuentosProvider, public global: Globals, public router: Router) { }

  aux: any;
  ngOnInit() {
    this.getCuentos();
  }

  getCuentos(){
    this.cuentos.getCuentos().then(data => {
      this.aux = data;
    });
  }

  irCuento(id){
    console.log(id)
    this.global.idCuento =  id;
    this.router.navigateByUrl('cuentos');
  }
}

