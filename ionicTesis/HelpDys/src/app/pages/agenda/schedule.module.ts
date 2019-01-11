import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SchedulePage } from './schedule';
import { ScheduleFilterPage } from '../agenda-busqueda/schedule-filter';
import { SchedulePageRoutingModule } from './schedule-routing.module';
import {NewEventPageModule} from "../new-event/new-event.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
      NewEventPageModule
  ],
  declarations: [
    SchedulePage,
    ScheduleFilterPage
  ],
  entryComponents: [
    ScheduleFilterPage
  ]
})
export class ScheduleModule { }
