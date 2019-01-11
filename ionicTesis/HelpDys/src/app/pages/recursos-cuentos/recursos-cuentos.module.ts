import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecursosCuentosPage } from './recursos-cuentos.page';

const routes: Routes = [
  {
    path: '',
    component: RecursosCuentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecursosCuentosPage]
})
export class RecursosCuentosPageModule {}
