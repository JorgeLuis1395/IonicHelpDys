import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MapPage } from './map';
import { MapPageRoutingModule } from './map-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MapPageRoutingModule,
      HttpClientModule
  ],
  declarations: [
    MapPage,
  ]
})
export class MapModule { }
