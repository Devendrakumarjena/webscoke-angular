import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'device', loadChildren: () => import('./Dashbord/device/device.module').then(m => m.DeviceModule) },
   { path: 'modules', loadChildren: () => import('./Dashbord/modules/modules.module').then(m => m.ModulesModule) },
    { path: 'rs232', loadChildren: () => import('./Dashbord/rs232/rs232.module').then(m => m.Rs232Module) }, 
    { path: 'rs485', loadChildren: () => import('./Dashbord/rs485/rs485.module').then(m => m.Rs485Module) },
     { path: 'can', loadChildren: () => import('./Dashbord/can/can.module').then(m => m.CanModule) }, 
     { path: 'io', loadChildren: () => import('./Dashbord/io/io.module').then(m => m.IoModule) },
      { path: 'cloud', loadChildren: () => import('./Dashbord/cloud/cloud.module').then(m => m.CloudModule) }, 
      { path: 'hardware', loadChildren: () => import('./Dashbord/hardware/hardware.module').then(m => m.HardwareModule) }, 
      { path: 'settings', loadChildren: () => import('./Dashbord/settings/settings.module').then(m => m.SettingsModule) }, 
      { path: 'interface', loadChildren: () => import('./Dashbord/interface/interface.module').then(m => m.InterfaceModule) },
       { path: 'wireless', loadChildren: () => import('./Dashbord/wireless/wireless.module').then(m => m.WirelessModule) }, 
       { path: 'logs', loadChildren: () => import('./Dashbord/logs/logs.module').then(m => m.LogsModule) }, 
      //  { path: 'backup', loadChildren: () =>('./Dashbord/backup/backup.moduleup.module'). }, 
        { path: 'update', loadChildren: () => import('./Dashbord/update/update.module').then(m => m.UpdateModule) }, 
        { path: 'reset', loadChildren: () => import('./Dashbord/reset/reset.module').then(m => m.ResetModule) }, 
        { path: 'about', loadChildren: () => import('./Dashbord/about/about.module').then(m => m.AboutModule) }, 
        { path: 'logout', loadChildren: () => import('./logout/logout.module').then(m => m.LogoutModule) },
        { path: '', redirectTo: '/device', pathMatch: 'full' } // Default route
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
