import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroProfesorPage } from './registro-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroProfesorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistroProfesorPage]
})
export class RegistroProfesorPageModule {}
