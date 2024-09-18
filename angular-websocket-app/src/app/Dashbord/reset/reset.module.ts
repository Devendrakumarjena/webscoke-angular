import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetRoutingModule } from './reset-routing.module';
import { ResetComponent } from './reset.component';
import { ResetStatusComponent } from './reset-status/reset-status.component';


@NgModule({
  declarations: [
    ResetComponent,
    ResetStatusComponent
  ],
  imports: [
    CommonModule,
    ResetRoutingModule
  ]
})
export class ResetModule { }
