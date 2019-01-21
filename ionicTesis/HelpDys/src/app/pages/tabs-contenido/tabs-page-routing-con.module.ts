import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TabsContenidoPage} from "./tabs-contenido.page";
import {RecursosVideosPage} from "../recursos-videos/recursos-videos.page";
import {RecursosJuegosPage} from "../recursos-juegos/recursos-juegos.page";
import {RecursosCuentosPage} from "../recursos-cuentos/recursos-cuentos.page";
import {RecursosImagenesPage} from "../recursos-imagenes/recursos-imagenes.page";


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsContenidoPage,
    children: [
      {
        path: 'videos',
        component: RecursosVideosPage,
        outlet: 'videos'
      },
      // tab one
      {
        path: 'juegos',
        component: RecursosJuegosPage,
        outlet: 'juegos'
      },
      // tab two
      {
        path: 'cuentos',
        component: RecursosCuentosPage,
        outlet: 'cuentos'
      },
        {
            path: 'imagenes',
            component: RecursosImagenesPage,
            outlet: 'imagenes'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingConModule { }
