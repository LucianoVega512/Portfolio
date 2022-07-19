import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editar-skills',
  templateUrl: './editar-skills.component.html',
  styleUrls: ['./editar-skills.component.css']
})
export class EditarSkillsComponent implements OnInit {

  @Output() cerrarVentana = new EventEmitter<boolean>();

  skills: { claseEtiqueta: string, claseRango: string, claseValor: string, nombre: string, valor: number }[] = [
    { claseEtiqueta: "etiqueta1", claseRango: "rango1", claseValor: "valor1", nombre: "JAVA-SE", valor: 90 },
    { claseEtiqueta: "etiqueta2", claseRango: "rango2", claseValor: "valor2", nombre: "ANGULAR", valor: 60 },
    { claseEtiqueta: "etiqueta3", claseRango: "rango3", claseValor: "valor3", nombre: "MySQL", valor: 70 },
    { claseEtiqueta: "etiqueta4", claseRango: "rango4", claseValor: "valor4", nombre: "VertX", valor: 75 },
    { claseEtiqueta: "etiqueta5", claseRango: "rango5", claseValor: "valor5", nombre: "MySQL", valor: 70 },
    { claseEtiqueta: "etiqueta6", claseRango: "rango6", claseValor: "valor6", nombre: "VertX", valor: 75 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  validarDatosSkills(){
    this.cerrarVentana.emit(false);
  }

}
