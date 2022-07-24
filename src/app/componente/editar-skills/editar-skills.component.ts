import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { Skills } from 'src/app/servicio/Skills';

@Component({
  selector: 'app-editar-skills',
  templateUrl: './editar-skills.component.html',
  styleUrls: ['./editar-skills.component.css']
})
export class EditarSkillsComponent implements OnInit {

  @Output() validarFormulario = new EventEmitter<FormGroup>();
  @Input() iniciarSkills:string[] = [];

  formulario:FormGroup;


  configuraciones: {claseRango: string, nombreCampo: string }[] = [
    {claseRango: "rango1", nombreCampo: "valor1" },
    {claseRango: "rango2", nombreCampo: "valor2" },
    {claseRango: "rango3", nombreCampo: "valor3" },
    {claseRango: "rango4", nombreCampo: "valor4" },
    {claseRango: "rango5", nombreCampo: "valor5" },
    {claseRango: "rango6", nombreCampo: "valor6" }
  ];

  constructor() { 
    this.formulario = new FormGroup({
      valor1: new FormControl(''),
      valor2: new FormControl(''),
      valor3: new FormControl(''),
      valor4: new FormControl(''),
      valor5: new FormControl(''),
      valor6: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  validarDatosSkills(){
    this.validarFormulario.emit(this.formulario);
  }

}
