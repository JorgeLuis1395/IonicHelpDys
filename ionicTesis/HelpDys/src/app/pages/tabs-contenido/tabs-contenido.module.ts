import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsContenidoPage } from './tabs-contenido.page';
import {RecursosCuentosPageModule} from "../recursos-cuentos/recursos-cuentos.module";
import {RecursosVideosPageModule} from "../recursos-videos/recursos-videos.module";
import {RecursosJuegosPageModule} from "../recursos-juegos/recursos-juegos.module";
import {RecursosImagenesPageModule} from "../recursos-imagenes/recursos-imagenes.module";
import {TabsPageRoutingConModule} from "./tabs-page-routing-con.module";

const routes: Routes = [
  {
    path: '',
    component: TabsContenidoPage
  }
];

@NgModule({
  imports: [
      RecursosCuentosPageModule,
      CommonModule,
      IonicModule,
      RecursosVideosPageModule,
      RecursosJuegosPageModule,
      RecursosImagenesPageModule,
      TabsPageRoutingConModule,
  ],
  declarations: [TabsContenidoPage]
})
export class TabsContenidoPageModule {}
