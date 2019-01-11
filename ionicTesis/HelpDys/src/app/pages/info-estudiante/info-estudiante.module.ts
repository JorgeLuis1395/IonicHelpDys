import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoEstudiantePage } from './info-estudiante.page';
import {EstudianteInicioPageModule} from "../estudiante-inicio/estudiante-inicio.module";
import {PopoverPageEstudiante} from "../info-popover/about-popover-estudiante";

const routes: Routes = [
  {
    path: '',
    component: InfoEstudiantePage
  }
];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      EstudianteInicioPageModule,
  ],
    declarations: [InfoEstudiantePage, PopoverPageEstudiante],
    entryComponents: [PopoverPageEstudiante],
    bootstrap: [InfoEstudiantePage],
})
export class InfoEstudiantePageModule {}
