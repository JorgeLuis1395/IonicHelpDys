import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AhorcadoPage} from "./ahorcado.page";
const routes: Routes = [
  {
    path: '',
    component: AhorcadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhorcadoRoutingModule { }
