import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroEstudiantePage } from './registro-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroEstudiantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistroEstudiantePage]
})
export class RegistroEstudiantePageModule {}
