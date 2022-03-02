import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  } from './guards/login-guard.guard';
import { SettingsService,
         SidebarService,
          SharedService,
         UsuarioService,
         HospitalService,
         LoginGuardGuard,
         AdminGuard,
         SubirArchivoService,
         MedicoService,
         VerificaTokenGuard
    } from './service.index';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { CiudadService } from './ciudad/ciudad.service';






@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService, SidebarService, SharedService, UsuarioService, SubirArchivoService, 
    LoginGuardGuard, AdminGuard , ModalUploadService,HospitalService, MedicoService, CiudadService ,VerificaTokenGuard
  ]
})
export class ServiceModule { }
