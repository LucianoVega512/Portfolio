import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  @Output() validarProyectos: EventEmitter<FormGroup> = new EventEmitter();

  formulario:FormGroup;

  proyectos: string[] = ["descripcion1", "descripcion2", "descripcion3"];

  constructor() { 
    this.formulario = new FormGroup({
      descripcion1: new FormControl(''),
      descripcion2: new FormControl(''),
      descripcion3: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  cerrarVentanaProyectos() {
    this.validarProyectos.emit(this.formulario);
  }

}
