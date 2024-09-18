import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudRoutingModule } from './cloud-routing.module';
import { CloudComponent } from './cloud.component';
import { CloudStatusComponent } from './cloud-status/cloud-status.component';


@NgModule({
  declarations: [
    CloudComponent,
    CloudStatusComponent
  ],
  imports: [
    CommonModule,
    CloudRoutingModule
  ]
})
export class CloudModule { }
