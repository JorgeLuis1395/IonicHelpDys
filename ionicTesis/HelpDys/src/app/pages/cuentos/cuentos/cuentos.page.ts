import { Component, OnInit } from '@angular/core';
import {CuentosProvider} from "../../../providers/cuentos";

@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.page.html',
  styleUrls: ['./cuentos.page.scss'],
})
export class CuentosPage implements OnInit {

  constructor(private _cuentosService: CuentosProvider) { }
 cuentos: any;
  ngOnInit() {
    this.cargarCuentos()
  }

  cargarCuentos(){
    this._cuentosService.getCuentosId()
        .then(data => {
          this.cuentos = data;
          console.log(this.cuentos);
        });
  }

}
