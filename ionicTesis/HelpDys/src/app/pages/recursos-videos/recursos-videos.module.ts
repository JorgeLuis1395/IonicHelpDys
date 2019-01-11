import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecursosVideosPage } from './recursos-videos.page';

const routes: Routes = [
  {
    path: '',
    component: RecursosVideosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecursosVideosPage]
})
export class RecursosVideosPageModule {}
