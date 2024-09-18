import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WirelessRoutingModule } from './wireless-routing.module';
import { WirelessComponent } from './wireless.component';
import { WirelessStatusComponent } from './wireless-status/wireless-status.component';


@NgModule({
  declarations: [
    WirelessComponent,
    WirelessStatusComponent
  ],
  imports: [
    CommonModule,
    WirelessRoutingModule
  ]
})
export class WirelessModule { }
