import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editar-stack',
  templateUrl: './editar-stack.component.html',
  styleUrls: ['./editar-stack.component.css']
})
export class EditarStackComponent implements OnInit {

  @Output() cerrarVentana = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  validarDatosStack(){
    this.cerrarVentana.emit(true);
  }

}
