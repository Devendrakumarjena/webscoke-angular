import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IoComponent } from './io.component';

const routes: Routes = [{ path: '', component: IoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IoRoutingModule { }
