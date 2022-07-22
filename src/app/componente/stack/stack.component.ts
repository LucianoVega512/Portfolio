import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  mostrarVentanaStack: boolean;

  tarjetas: { claseTarjeta: string, urlImagen: string, descripcion: string }[] = [
    {claseTarjeta: "contenedor-tarjeta1", urlImagen: "./assets/angular.png", descripcion: "Programacion front-end con el framework"},
    {claseTarjeta: "contenedor-tarjeta2", urlImagen: "./assets/spring.png", descripcion: "Programacion front-end con el framework"},
    {claseTarjeta: "contenedor-tarjeta3", urlImagen: "./assets/mysql.png", descripcion: "Programacion front-end con el framework"}
  ];

  chips: string[] = ["Prime NG", "Git/GitHub", "Scrum", "Ng2-Charts", "Font Awesome", "CSS-Grid", "JWT", "Java 11"];

  constructor() {
    this.mostrarVentanaStack = false;
  }

  cerrarVentana() {
    this.mostrarVentanaStack = false;
  }

  abrirVentanaEdicion() {
    this.mostrarVentanaStack = true;
  }


  ngOnInit(): void {
  }

}
