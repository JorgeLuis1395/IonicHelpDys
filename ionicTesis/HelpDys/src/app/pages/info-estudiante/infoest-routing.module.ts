import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoEstudiantePage} from "./info-estudiante.page";
const routes: Routes = [
  {
    path: '',
    component: InfoEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoestRoutingModule { }
