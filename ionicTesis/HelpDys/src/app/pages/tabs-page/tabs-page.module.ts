import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../informacion/about.module';
import { MapModule } from '../reporte/map.module';
import { ScheduleModule } from '../agenda/schedule.module';
import { SessionDetailModule } from '../session-detalles/session-detail.module';
import { SpeakerDetailModule } from '../estudiantes/speaker-detail.module';
import { SpeakerListModule } from '../estudiantes-lista/speaker-list.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MapModule,
    ScheduleModule,
    SessionDetailModule,
    SpeakerDetailModule,
    SpeakerListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
