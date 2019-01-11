import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstudianteInicioPage } from './estudiante-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: EstudianteInicioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstudianteInicioPage]
})
export class EstudianteInicioPageModule {}
