import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakerListPage } from '../estudiantes-lista/speaker-list';
import {InfoEstudiantePage} from "../info-estudiante/info-estudiante.page";
import {TabsEstudiantePage} from "./tabs-estudiante.page";
import {DiagnosticoEstudiantePage} from "../diagnostico-estudiante/diagnostico-estudiante.page";


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
        component: DiagnosticoEstudiantePage,
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
