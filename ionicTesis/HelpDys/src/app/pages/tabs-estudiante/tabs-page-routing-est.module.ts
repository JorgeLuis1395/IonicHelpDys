import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapPage } from '../reporte/map';
import { SchedulePage } from '../agenda/schedule';
import { SessionDetailPage } from '../session-detalles/session-detail';
import { SpeakerDetailPage } from '../estudiantes/speaker-detail';
import { SpeakerListPage } from '../estudiantes-lista/speaker-list';
import {InfoEstudiantePage} from "../info-estudiante/info-estudiante.page";
import {TabsEstudiantePage} from "./tabs-estudiante.page";


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsEstudiantePage,
    children: [
      {
        path: 'inicio',
        component: InfoEstudiantePage,
        outlet: 'inicio'
      },
      // tab one
      {
        path: 'recursos',
        component: SchedulePage,
        outlet: 'recursos'
      },
      // tab two
      {
        path: 'calificaciones',
        component: SpeakerListPage,
        outlet: 'calificaciones'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingEstModule { }
