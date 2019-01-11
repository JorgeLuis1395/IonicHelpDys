import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { MapPage } from '../reporte/map';
import { SchedulePage } from '../agenda/schedule';
import { SessionDetailPage } from '../session-detalles/session-detail';
import { SpeakerDetailPage } from '../estudiantes/speaker-detail';
import { SpeakerListPage } from '../estudiantes-lista/speaker-list';
import {AboutPage} from '../informacion/about';
import {NewEventPage} from "../new-event/new-event.page";
import {RegistroEstudiantePage} from "../registro-estudiante/registro-estudiante.page";


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'about',
        component: AboutPage,
        outlet: 'about'
      },
      // tab one
      {
        path: 'schedule',
        component: SchedulePage,
        outlet: 'schedule'
      },
        {
            path: 'new',
            component: NewEventPage,
            outlet: 'schedule'
        },
      {
        path: 'session/:sessionId',
        component: SessionDetailPage,
        outlet: 'schedule'
      },
      // tab two
      {
        path: 'speakers',
        component: SpeakerListPage,
        outlet: 'speakers'
      },
        {
            path: 'estudiante',
            component: RegistroEstudiantePage,
            outlet: 'speakers'
        },
      {
        path: 'session/:sessionId',
        component: SessionDetailPage,
        outlet: 'speakers'
      },
      {
        path: 'speaker-details/:speakerId',
        component: SpeakerDetailPage,
        outlet: 'speakers'
      },
      // tab three
      {
        path: 'map',
        component: MapPage,
        outlet: 'map'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
