import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsJuegosPage } from './tabs-juegos.page';
import {SpeakerListModule} from "../estudiantes-lista/speaker-list.module";
import {SpeakerDetailModule} from "../estudiantes/speaker-detail.module";
import {TabsPageRoutingJuegosModule} from "./tabs-page-routing-juegos.module";
import {AhorcadoPageModule} from "../ahorcado/ahorcado.module";
import {MemoriaPageModule} from "../memoria/memoria.module";
import {RecursosJuegosPageModule} from "../recursos-juegos/recursos-juegos.module";
import {Memoria1PageModule} from "../memoria1/memoria1.module";

@NgModule({
  imports: [
      RecursosJuegosPageModule,
      CommonModule,
      IonicModule,
      RecursosJuegosPageModule,
      MemoriaPageModule,
      Memoria1PageModule,
      SpeakerDetailModule,
      SpeakerListModule,
      AhorcadoPageModule,
      Memoria1PageModule,
      MemoriaPageModule,
      TabsPageRoutingJuegosModule,
  ],
  declarations: [TabsJuegosPage]
})
export class TabsJuegosPageModule {}
