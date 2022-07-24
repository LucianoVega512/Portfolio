import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  @Output() validarAcercaDe: EventEmitter<FormGroup> = new EventEmitter();

  formulario: FormGroup;

  constructor() { 
    this.formulario = new FormGroup({
      nombre: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  cerrarVentanaAcercaDe(){
    this.validarAcercaDe.emit(this.formulario);
  }

}
