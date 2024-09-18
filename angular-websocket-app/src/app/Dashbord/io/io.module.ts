import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IoRoutingModule } from './io-routing.module';
import { IoComponent } from './io.component';
import { IoStatusComponent } from './io-status/io-status.component';


@NgModule({
  declarations: [
    IoComponent,
    IoStatusComponent
  ],
  imports: [
    CommonModule,
    IoRoutingModule
  ]
})
export class IoModule { }
