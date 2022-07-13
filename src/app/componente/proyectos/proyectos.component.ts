import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  imagenes_url: string[] = ["./assets/spring.png", "./assets/mysql.png", "./assets/programacion.png"];
  imagen_actual: string = "./assets/spring.png";
  indice_imagen: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  siguiente() {
    if (this.indice_imagen < 2) {
      this.imagen_actual = this.imagenes_url[++this.indice_imagen];
    }
  }

  anterior() {
    if (this.indice_imagen > 0) {
      this.imagen_actual = this.imagenes_url[--this.indice_imagen];
    }
  }

}
