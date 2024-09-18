import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WirelessComponent } from './wireless.component';

const routes: Routes = [{ path: '', component: WirelessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WirelessRoutingModule { }
