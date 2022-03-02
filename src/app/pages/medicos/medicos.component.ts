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
  totalRegistros: number = 0;
  cargando: boolean = true;
  desde: number = 0;


  constructor(
    public _medicoService: MedicoService
  ) { }

  ngOnInit(): void {
    this.cargarMedico();
  }


cargarMedico(){

  this.cargando = true;

  this._medicoService.cargarMedicos(this.desde)
  .subscribe((medicos:any) => {
    
    this.totalRegistros = medicos.total;
    this.medicos = medicos.medicos;
    this.medicos = medicos;
    this.medicos = medicos
  })

}

buscarMedico(termino:any){

  if ( termino.length <= 0){
    this.cargarMedico();
    return;
  }

  this._medicoService.buscarMedico(termino)
      .subscribe(medicos => this.medicos = medicos);
}


borrarMedico(medico:any){

  this._medicoService.borrarMedico(medico._id)
  .subscribe( () => this.cargarMedico());
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
  this.cargarMedico();

}

}
