import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rs232RoutingModule } from './rs232-routing.module';
import { Rs232Component } from './rs232.component';
import { Rs232StatusComponent } from './rs232-status/rs232-status.component';


@NgModule({
  declarations: [
    Rs232Component,
    Rs232StatusComponent
  ],
  imports: [
    CommonModule,
    Rs232RoutingModule
  ]
})
export class Rs232Module { }
