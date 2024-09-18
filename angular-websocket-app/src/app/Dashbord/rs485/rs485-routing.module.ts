import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rs485Component } from './rs485.component';

const routes: Routes = [{ path: '', component: Rs485Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rs485RoutingModule { }
