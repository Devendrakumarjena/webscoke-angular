import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanRoutingModule } from './can-routing.module';
import { CanComponent } from './can.component';
import { CanStatusComponent } from './can-status/can-status.component';


@NgModule({
  declarations: [
    CanComponent,
    CanStatusComponent
  ],
  imports: [
    CommonModule,
    CanRoutingModule
  ]
})
export class CanModule { }
