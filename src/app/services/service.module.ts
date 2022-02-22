import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  } from './guards/login-guard.guard';
import { SettingsService,
         SidebarService,
          SharedService,
         UsuarioService,
         HospitalService,
         LoginGuardGuard,
         SubirArchivoService,
         MedicoService
    } from './service.index';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';






@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService, SidebarService, SharedService, UsuarioService, SubirArchivoService, 
    LoginGuardGuard, ModalUploadService,HospitalService, MedicoService
  ]
})
export class ServiceModule { }
