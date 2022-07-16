import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  @Output() cerrarVentana = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  cerrarVentanaAcercaDe(){
    this.cerrarVentana.emit(true);
  }

}
