import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { Ciudad } from '../../models/ciudad.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  totalCiudades: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService

  ) { }

  cargarCiudades(desde: number = 0) {

    let url = URL_SERVICIOS + '/ciudad?desde=' + desde;
    return this.http.get( url )
              .map( (resp: any) => {
                this.totalCiudades = resp.total;
                return resp.ciudades;
              });

  }


  obtenerCiudad( id: string ) {

    let url = URL_SERVICIOS + '/ciudad/' + id;
    return this.http.get( url )
                .map( (resp: any) => resp.ciudad );

  }

  borrarCiudad( id: string ) {

    let url = URL_SERVICIOS + '/ciudad/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete( url )
                .map( resp => swal('Ciudad Borrada', 'Eliminado correctamente', 'success') );

  }

  crearCiudad( nombre: string ) {

    let url = URL_SERVICIOS + '/ciudad';
    url += '?token=' + this._usuarioService.token;

    return this.http.post( url, { nombre } )
              .map( (resp: any) => resp.ciudad );

  }



  buscarCiudad( termino: string ) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/ciudades/' + termino;
    return this.http.get( url )
                .map( (resp: any) => resp.ciudades );

  }

  actualizarCiudad( ciudad: Ciudad ) {

    let url = URL_SERVICIOS + '/ciudad/' + ciudad._id;
    url += '?token=' + this._usuarioService.token;

    return this.http.put( url, ciudad )
              .map( (resp: any) => {

                swal('Ciudad Actualiada', ciudad.nombre, 'success');
                return resp.ciudad;
              });

  }

}
