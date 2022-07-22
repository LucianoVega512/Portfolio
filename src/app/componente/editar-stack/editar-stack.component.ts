import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editar-stack',
  templateUrl: './editar-stack.component.html',
  styleUrls: ['./editar-stack.component.css']
})
export class EditarStackComponent implements OnInit {

  @Output() cerrarVentana = new EventEmitter<boolean>();

  stacks: { claseTarjeta: string, span: string}[] = [
    { claseTarjeta: "tarjeta1", span: "Descripcion 1"},
    { claseTarjeta: "tarjeta2", span: "Descripcion 2"},
    { claseTarjeta: "tarjeta3", span: "Descripcion 3"},
    { claseTarjeta: "chip", span: "Agregar chip"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  validarDatosStack(){
    this.cerrarVentana.emit(true);
  }

}
