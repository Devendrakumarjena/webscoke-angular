import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterfaceRoutingModule } from './interface-routing.module';
import { InterfaceComponent } from './interface.component';
import { InterfaceStatusComponent } from './interface-status/interface-status.component';


@NgModule({
  declarations: [
    InterfaceComponent,
    InterfaceStatusComponent
  ],
  imports: [
    CommonModule,
    InterfaceRoutingModule
  ]
})
export class InterfaceModule { }
