import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  } from './guards/login-guard.guard';
import { SettingsService,
         SidebarService,
          SharedService,
         UsuarioService,
         LoginGuardGuard,
         SubirArchivoService
    } from './service.index';





@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService, SidebarService, SharedService, UsuarioService, SubirArchivoService, LoginGuardGuard
  ]
})
export class ServiceModule { }
