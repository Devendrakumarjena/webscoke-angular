import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanComponent } from './can.component';

const routes: Routes = [{ path: '', component: CanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanRoutingModule { }
