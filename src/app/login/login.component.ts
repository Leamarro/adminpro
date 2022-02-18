import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function init_plugins():any;
declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.components.css']
})
export class LoginComponent implements OnInit {

  email: any;
  recuerdame: boolean = false;

  auth2: any;

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1 ) {
      this.recuerdame = true;
    }

  }

  googleInit() {

    gapi.load('auth2', () => {

      this.auth2 = gapi.auth2.init({
        client_id: '464457429303-gvi1h1ccfa0iu42luncvg8o91c7vfq2h.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin( document.getElementById('btnGoogle') );

    });

  }

  attachSignin( element:any ) {

    this.auth2.attachClickHandler( element, {}, (googleUser:any) => {

      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle( token )
              .subscribe( () => window.location.href = '#/dashboard'  );
              console.log(token)
    });

  }


  ingresar( forma: NgForm) {

    if ( forma.invalid ) {
      return;
    }

    let usuario = new Usuario('', forma.value.email, forma.value.password );

    this._usuarioService.login( usuario, forma.value.recuerdame )
                  .subscribe( correcto => this.router.navigate(['/dashboard'])  );



    // this.router.navigate([ '/dashboard' ]);

  }

}
