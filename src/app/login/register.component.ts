import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as swal from 'sweetalert';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';

declare function init_plugins():any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.components.css']
})
export class RegisterComponent implements OnInit {

  forma: any;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  sonIguales( campo1: any, campo2: any ) {

    return ( group: any ) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }

      return {
        sonIguales: true
      };

    };

  }


  ngOnInit() {
      init_plugins();

      this.forma = new FormGroup({
        nombre: new FormControl( null , Validators.required ),
        correo: new FormControl( null , [Validators.required, Validators.email] ),
        password: new FormControl( null , Validators.required ),
        password2: new FormControl( null , Validators.required ),
        condiciones: new FormControl( false )
      }, { validators: this.sonIguales( 'password', 'password2' )  } );


      this.forma.setValue({
        nombre: 'Test ',
        correo: 'test@test.com',
        password: '123456',
        password2: '123456',
        condiciones: true
      });

  }


  registrarUsuario() {

    if ( this.forma.invalid ) {
      return;
    }

    if ( !this.forma.value.condiciones ) {
      swal('Importante', 'Debe de aceptar las condiciones', 'warning');
      return;
    }


    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
    );

    this._usuarioService.crearUsuario( usuario )
              .subscribe( resp => this.router.navigate(['/login']));


  }

}
