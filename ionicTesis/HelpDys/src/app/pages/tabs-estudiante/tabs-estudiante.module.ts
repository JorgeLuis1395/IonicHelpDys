import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TabsEstudiantePage } from './tabs-estudiante.page';
import {SpeakerListModule} from "../estudiantes-lista/speaker-list.module";
import {MapModule} from "../reporte/map.module";
import {SessionDetailModule} from "../session-detalles/session-detail.module";
import {SpeakerDetailModule} from "../estudiantes/speaker-detail.module";
import {TabsPageRoutingEstModule} from "./tabs-page-routing-est.module";
import {InfoEstudiantePageModule} from "../info-estudiante/info-estudiante.module";
import {DiagnosticoEstudiantePageModule} from "../diagnostico-estudiante/diagnostico-estudiante.module";

@NgModule({
  imports: [
      InfoEstudiantePageModule,
      CommonModule,
      IonicModule,
      MapModule,
      DiagnosticoEstudiantePageModule,
      SessionDetailModule,
      SpeakerDetailModule,
      SpeakerListModule,
      TabsPageRoutingEstModule,
  ],
  declarations: [TabsEstudiantePage]
})
export class TabsEstudiantePageModule {}
