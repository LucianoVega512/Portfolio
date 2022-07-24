import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { Proyectos } from 'src/app/servicio/Proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  mostrarVentana: boolean = false;

  proyectos:Proyectos;

  // proyectos: { url: string, descripcion: string }[] = [{ url: "./assets/spring.png", descripcion: "descripcion 1" },
  // { url: "./assets/mysql.png", descripcion: "descripcion 2" }, { url: "./assets/programacion.png", descripcion: "descripcion 3" }];

  // [{"./assets/spring.png", "Esta es una"}, {"./assets/mysql.png", "sdfd"}, {"./assets/programacion.png"}];
  // imagen_actual: string = "./assets/spring.png";
  // imagen_descripcion: string = "descripcion 1";
  imagen_actual: string = "";
  imagen_descripcion: string = "";
  indice_imagen: number = 0;

  constructor(private datos: DatosBackendService) { 
    this.proyectos = datos.obtenerProyectos();
    this.imagen_actual = this.proyectos.urls[0];
    this.imagen_descripcion = this.proyectos.descripciones[0];
  }

  ngOnInit(): void {
  }

  siguiente() {
    if (this.indice_imagen < 2) {
      // this.imagen_actual = this.proyectos[++this.indice_imagen].url;
      // this.imagen_descripcion = this.proyectos[this.indice_imagen].descripcion;
      this.imagen_actual = this.proyectos.urls[++this.indice_imagen];
      this.imagen_descripcion = this.proyectos.descripciones[this.indice_imagen];
    }
  }

  anterior() {
    if (this.indice_imagen > 0) {
      // this.imagen_actual = this.proyectos[--this.indice_imagen].url; 
      // this.imagen_descripcion = this.proyectos[this.indice_imagen].descripcion;
      this.imagen_actual = this.proyectos.urls[--this.indice_imagen];
      this.imagen_descripcion = this.proyectos.descripciones[this.indice_imagen];
    }
  }

  validarFormulario(formulario: FormGroup) {

    let datoFormulario: boolean = false;

    if(!formulario.get("descripcion1")?.invalid){
      this.proyectos.descripciones[0] = formulario.get("descripcion1")?.value;
      datoFormulario = true;
    }

    if(!formulario.get("descripcion2")?.invalid){
      this.proyectos.descripciones[1] = formulario.get("descripcion2")?.value;
      datoFormulario = true;
    }

    if(!formulario.get("descripcion3")?.invalid){
      this.proyectos.descripciones[2] = formulario.get("descripcion3")?.value;
      datoFormulario = true;
    }

    if(datoFormulario){
      this.datos.establecerProyectos(this.proyectos);
    }

    this.mostrarVentana = false;
  }

  abrirVentana() {
    this.mostrarVentana = true;
  }

}
