import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';
import { UpdateStatusComponent } from './update-status/update-status.component';


@NgModule({
  declarations: [
    UpdateComponent,
    UpdateStatusComponent
  ],
  imports: [
    CommonModule,
    UpdateRoutingModule
  ]
})
export class UpdateModule { }
