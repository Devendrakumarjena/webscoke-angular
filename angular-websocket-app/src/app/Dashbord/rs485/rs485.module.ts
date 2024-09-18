import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rs485RoutingModule } from './rs485-routing.module';
import { Rs485Component } from './rs485.component';
import { Rs485StatusComponent } from './rs485-status/rs485-status.component';


@NgModule({
  declarations: [
    Rs485Component,
    Rs485StatusComponent
  ],
  imports: [
    CommonModule,
    Rs485RoutingModule
  ]
})
export class Rs485Module { }
