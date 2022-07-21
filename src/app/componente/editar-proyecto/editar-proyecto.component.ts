import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  @Output() cerrarVentana: EventEmitter<boolean> = new EventEmitter();

  // proyectos: { claseDescripcion: string, entrada: string }[] = [
  //   { claseDescripcion: "descripcion1", entrada: "entrada1" },
  //   { claseDescripcion: "descripcion2", entrada: "entrada2" },
  //   { claseDescripcion: "descripcion3", entrada: "entrada3" },
  // ]
  proyectos: string[] = ["descripcion1", "descripcion2", "descripcion3"];

  constructor() { }

  ngOnInit(): void {
  }

  cerrarVentanaProyectos() {
    this.cerrarVentana.emit(true);
  }

}
