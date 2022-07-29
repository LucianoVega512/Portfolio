import { Component, OnInit } from '@angular/core';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { Descripcion } from 'src/app/servicio/Descripcion';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  mostrarVentanaProyecto: boolean;
  esAdministrador: boolean = false;

  descripciones: Descripcion[];
  descripcionActual: Descripcion;

  imagen: string = "0";

  imagen_actual: string = "";
  imagen_descripcion: string = "";
  indice_imagen: number = 0;

  constructor(private datos: DatosBackendService) {
    datos.obtenerEditable().subscribe({
      next:(b)=>{        
        this.esAdministrador = b;
      }
    });

    this.descripciones = datos.obtenerDescripciones();
    this.descripcionActual = {} as Descripcion;

    this.mostrarVentanaProyecto = false;
  }

  ngOnInit(): void {
  }

  siguiente() {
    if (this.indice_imagen < 2) {
      this.imagen = (++this.indice_imagen).toString();
    }
  }

  anterior() {
    if (this.indice_imagen > 0) {
      this.imagen = (--this.indice_imagen).toString();
    }
  }

  editarProyecto(descripcion: Descripcion) {
    if (this.esAdministrador) {
      this.descripcionActual = descripcion;
      this.mostrarVentanaProyecto = true;
    }
  }

  guardarDescripcion(descripcion: Descripcion) {

    this.descripciones.forEach(t => {
      if (t.id == descripcion.id) {
        t.descripcionProyecto = descripcion.descripcionProyecto;
      }
    });

    this.mostrarVentanaProyecto = false;
  }
}
