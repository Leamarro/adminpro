import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../models/ciudad.model';
import { CiudadService } from '../../services/ciudad/ciudad.service';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';


declare var swal: any;

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styles: []
})
export class CiudadComponent implements OnInit {

  ciudades: Ciudad[] = [];
  totalRegistros: number = 0;
  cargando: boolean = true;
  desde: number = 0;

  constructor(
    public _ciudadService: CiudadService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarCiudades();

    this._modalUploadService.notificacion
          .subscribe( () => this.cargarCiudades() );
  }

  buscarCiudad( termino:any ) {

    if ( termino.length <= 0 ) {
      this.cargarCiudades();
      return;
    }

    this._ciudadService.buscarCiudad( termino )
            .subscribe( (ciudades:any) => this.ciudades = ciudades );

  }

  cargarCiudades() {

    this.cargando= true;

    this._ciudadService.cargarCiudades(this.desde)
            .subscribe( (ciudades:any) => {

              this.totalRegistros = ciudades.total;
              this.ciudades = ciudades.ciudades
              this.ciudades = ciudades 
              this.cargando = false
            });
  }


  guardarCiudad( ciudad: any) {

    this._ciudadService.actualizarCiudad( ciudad )
            .subscribe();

  }

  borrarCiudad( ciudad: any ) {

    this._ciudadService.borrarCiudad( ciudad._id )
            .subscribe( () =>  this.cargarCiudades() );

  }

  crearCiudad() {

    swal({
      title: 'Crear ciudad',
      text: 'Ingrese el nombre de la ciudad',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then( (valor: any ) => {

      if ( !valor || valor.length === 0 ) {
        return;
      }

      this._ciudadService.crearCiudad( valor )
              .subscribe( () => this.cargarCiudades() );

    });

  }

  actualizarImagen( ciudad: any ) {

    this._modalUploadService.mostrarModal( 'ciudades', ciudad._id );

  }

  cambiarDesde( valor: number ) {

    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarCiudades();

  }

}
