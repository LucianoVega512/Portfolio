import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  @Output() cerrarVentana:EventEmitter<boolean> = new EventEmitter();

  proyectos: { descripcion: string, entrada: string }[] = [
    { descripcion: "descripcion1", entrada: "entrada1" },
    { descripcion: "descripcion2", entrada: "entrada2" },
    { descripcion: "descripcion3", entrada: "entrada3" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cerrarVentanaProyectos(){
    this.cerrarVentana.emit(true);
  }

}
