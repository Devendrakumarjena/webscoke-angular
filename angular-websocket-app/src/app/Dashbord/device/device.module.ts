import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { DeviceStatusComponent } from './device-status/device-status.component';


@NgModule({
  declarations: [
    DeviceComponent,
    DeviceStatusComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule
  ]
})
export class DeviceModule { }
