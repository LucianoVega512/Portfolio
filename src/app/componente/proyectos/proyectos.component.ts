import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { Descripcion } from 'src/app/servicio/Descripcion';
import { EstadoJwtService } from 'src/app/servicio/estado-jwt.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  mostrarVentanaProyecto: boolean;
  esAdministrador: boolean;

  descripciones: Descripcion[];
  descripcionActual: Descripcion;

  imagen: string = "0";

  imagen_actual: string = "";
  imagen_descripcion: string = "";
  indice_imagen: number = 0;

  constructor(private datos: DatosBackendService, private jwt: EstadoJwtService) {
    // this.proyectos = datos.obtenerProyectos();
    // this.imagen_actual = this.proyectos.urls[0];
    // this.imagen_descripcion = this.proyectos.descripciones[0];
    this.esAdministrador = jwt.esAdministrador();

    this.descripciones = datos.obtenerDescripciones();
    this.descripcionActual = {} as Descripcion;

    this.mostrarVentanaProyecto = false;
  }

  ngOnInit(): void {
  }

  siguiente() {
    if (this.indice_imagen < 2) {
      // this.imagen_actual = this.proyectos[++this.indice_imagen].url;
      // this.imagen_descripcion = this.proyectos[this.indice_imagen].descripcion;
      // this.imagen_actual = this.proyectos.urls[++this.indice_imagen];
      // this.imagen_descripcion = this.proyectos.descripciones[this.indice_imagen];
      this.imagen = (++this.indice_imagen).toString();
    }
  }

  anterior() {
    if (this.indice_imagen > 0) {
      // this.imagen_actual = this.proyectos[--this.indice_imagen].url; 
      // this.imagen_descripcion = this.proyectos[this.indice_imagen].descripcion;
      // this.imagen_actual = this.proyectos.urls[--this.indice_imagen];
      // this.imagen_descripcion = this.proyectos.descripciones[this.indice_imagen];
      this.imagen = (--this.indice_imagen).toString();
    }
  }

  editarProyecto(descripcion: Descripcion) {
    if (this.esAdministrador) {

      // proyecto a modificar
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

    // let datoFormulario: boolean = false;

    // if(!formulario.get("descripcion1")?.invalid){
    //   this.proyectos.descripciones[0] = formulario.get("descripcion1")?.value;
    //   datoFormulario = true;
    // }

    // if(!formulario.get("descripcion2")?.invalid){
    //   this.proyectos.descripciones[1] = formulario.get("descripcion2")?.value;
    //   datoFormulario = true;
    // }

    // if(!formulario.get("descripcion3")?.invalid){
    //   this.proyectos.descripciones[2] = formulario.get("descripcion3")?.value;
    //   datoFormulario = true;
    // }

    // if(datoFormulario){
    //   // this.datos.establecerProyectos(this.proyectos);
    // }

    // this.mostrarVentana = false;
  }

  abrirVentana() {
    // this.mostrarVentana = true;
  }

}
