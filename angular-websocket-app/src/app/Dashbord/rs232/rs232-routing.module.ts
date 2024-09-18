import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rs232Component } from './rs232.component';

const routes: Routes = [{ path: '', component: Rs232Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rs232RoutingModule { }
