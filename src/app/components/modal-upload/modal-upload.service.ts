import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class ModalUploadService {

  public tipo: any;
  public id: any;

  public oculto: any = 'oculto';

  public notificacion = new EventEmitter<any>();

  constructor() { }

  ocultarModal() {
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;
  }

  mostrarModal( tipo: string, id: string ) {
    this.oculto = '';
    this.id = id;
    this.tipo = tipo;
  }

}
