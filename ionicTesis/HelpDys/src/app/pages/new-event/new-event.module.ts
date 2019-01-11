import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewEventPage } from './new-event.page';
import {NewRoutingModule} from "./new-routing.module";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      NewRoutingModule,
  ],
  declarations: [NewEventPage],
})
export class NewEventPageModule {}
