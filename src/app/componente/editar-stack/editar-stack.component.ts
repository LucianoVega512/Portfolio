import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';

@Component({
  selector: 'app-editar-stack',
  templateUrl: './editar-stack.component.html',
  styleUrls: ['./editar-stack.component.css']
})
export class EditarStackComponent implements OnInit {

  @Output() validarFormulario = new EventEmitter<FormGroup>();

  formulario:FormGroup;

  stacks: { claseTarjeta: string, span: string, nombreCampo:string, valorEntrada:string}[] = [
    { claseTarjeta: "tarjeta1", span: "Descripcion 1", nombreCampo:"descripcion1", valorEntrada:""},
    { claseTarjeta: "tarjeta2", span: "Descripcion 2", nombreCampo:"descripcion2", valorEntrada:""},
    { claseTarjeta: "tarjeta3", span: "Descripcion 3", nombreCampo:"descripcion3", valorEntrada:""},
    { claseTarjeta: "chip", span: "Agregar chip", nombreCampo:"chip", valorEntrada:""}
  ];

  constructor(private datos:DatosBackendService) { 
    this.formulario = new FormGroup({
      descripcion1: new FormControl(''),
      descripcion2: new FormControl(''),
      descripcion3: new FormControl(''),
      chip: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  validarDatosStack(){    
    this.validarFormulario.emit(this.formulario);
  }

  

}
