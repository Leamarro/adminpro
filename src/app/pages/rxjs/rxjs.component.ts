import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 



  this.subscription = this.regresaObservable()
  .subscribe( numero => console.log('Subs', numero),
  error => console.error('Error en el obs', error),
  () => console.log('El observador termino')
  )

  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('La pagina se va  a cerrar')
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {

      let contador = 0;
  
      let intervalo = setInterval(() => {
  
      contador ++;

      const salida = {
        valor: contador
      }
  
        observer.next( salida )
  
        // if( contador === 3) {
        //   clearInterval(intervalo)
        //   observer.complete();
        // }

  
      }, 1000)
    }).pipe( 
      map( resp => resp.valor ),
      filter( (valor, index) => {

        if( (valor % 2) === 1){
          // par
          return true
        }else{
          //impar
          return false
        }

      })
     )
  }

}
