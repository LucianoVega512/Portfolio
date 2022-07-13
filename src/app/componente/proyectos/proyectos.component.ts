import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  // imagenes_url:[string, string] = ["jashnd", "sjdfjk"]

  proyectos: { url: string, descripcion: string }[] = [{url:"./assets/spring.png", descripcion:"descripcion 1"}, 
    {url:"./assets/mysql.png", descripcion:"descripcion 2"}, {url:"./assets/programacion.png", descripcion:"descripcion 3"}];

  // [{"./assets/spring.png", "Esta es una"}, {"./assets/mysql.png", "sdfd"}, {"./assets/programacion.png"}];
  imagen_actual: string = "./assets/spring.png";
  imagen_descripcion: string = "descripcion 1";
  indice_imagen: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  siguiente() {
    if (this.indice_imagen < 2) {
      this.imagen_actual = this.proyectos[++this.indice_imagen].url;
      this.imagen_descripcion = this.proyectos[this.indice_imagen].descripcion;
    }
  }

  anterior() {
    if (this.indice_imagen > 0) {
      this.imagen_actual = this.proyectos[--this.indice_imagen].url;
      this.imagen_descripcion = this.proyectos[this.indice_imagen].descripcion;
    }
  }

}
