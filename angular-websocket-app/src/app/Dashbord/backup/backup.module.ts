import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackupRoutingModule } from './backup-routing.module';
import { BackupComponent } from './backup.component';
import { BackupStatusComponent } from './backup-status/backup-status.component';


@NgModule({
  declarations: [
    BackupComponent,
    BackupStatusComponent
  ],
  imports: [
    CommonModule,
    BackupRoutingModule
  ]
})
export class BackupModule { }
