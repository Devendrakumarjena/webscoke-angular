import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HardwareRoutingModule } from './hardware-routing.module';
import { HardwareComponent } from './hardware.component';
import { HardwareStatusComponent } from './hardware-status/hardware-status.component';


@NgModule({
  declarations: [
    HardwareComponent,
    HardwareStatusComponent
  ],
  imports: [
    CommonModule,
    HardwareRoutingModule
  ]
})
export class HardwareModule { }
