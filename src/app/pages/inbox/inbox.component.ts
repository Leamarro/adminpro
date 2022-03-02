import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico/medico.service';
import { Medico } from '../../models/medico.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styles: [
  ]
})
export class InboxComponent implements OnInit {
  medico:Medico = new Medico('', '', '', '', '');

  constructor(
    public _medicoService: MedicoService
  ) { }

  ngOnInit(): void {
  }

  cargarMedico(id:any){

    this._medicoService.cargarMedico(id)
    .subscribe(medico => {

      console.log(medico)
      this.medico = medico;
      this.medico.hospital = medico.hospital._id;
    });

  }

}
