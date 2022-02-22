import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/service.index';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [
  ]
})
export class MedicosComponent implements OnInit {


  medicos: Medico [] = [];


  constructor(
    public _medicoService: MedicoService
  ) { }

  ngOnInit(): void {
    this.cargarMedico();
  }


cargarMedico(){

  this._medicoService.cargarMedicos()
  .subscribe(medicos => this.medicos = medicos)

}

buscarMedico(termino:any){

  if ( termino.length <= 0){
    this.cargarMedico();
    return;
  }

  this._medicoService.buscarMedico(termino)
      .subscribe(medicos => this.medicos = medicos);
}

crearMedico() {
  
}

editarMedico( medico:any){

}

borrarMedico(medico:any){

  this._medicoService.borrarMedico(medico._id)
  .subscribe( () => this.cargarMedico());
}

}
