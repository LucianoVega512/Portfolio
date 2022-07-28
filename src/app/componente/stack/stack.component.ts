import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Chip } from 'src/app/servicio/Chip';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { EstadoJwtService } from 'src/app/servicio/estado-jwt.service';
import { Tarjeta } from 'src/app/servicio/Tarjeta';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  mostrarVentanaStack: boolean;

  esAdministrador: boolean;

  claseTextoTarjeta: string = "texto-tarjeta";

  tarjetaActual:Tarjeta;

  tarjetas: Tarjeta[];
  chips: Chip[];


  clases: string[] = ["contenedor-tarjeta1", "contenedor-tarjeta2", "contenedor-tarjeta3"];

  constructor(private datos: DatosBackendService, private jwt: EstadoJwtService) {
    this.mostrarVentanaStack = false;

    this.tarjetaActual = {} as Tarjeta;

    this.tarjetas = datos.obtenerTarjetas();
    this.chips = datos.obtenerChips();

    this.esAdministrador = jwt.esAdministrador();
  }

  ngOnInit(): void {
  }

  editarTarjeta(indice: number) {
    if (this.esAdministrador) {
      // console.log(this.tarjetas[indice]);
      this.tarjetaActual = this.tarjetas[indice];
      this.mostrarVentanaStack = true;
    }
  }

  validarFormulario(formulario: FormGroup) {
    // let datoFormulario:boolean = false;

    // if(!formulario.get("descripcion1")?.invalid){
    //   this.stack.tarjeta[0].descripcion = formulario.get("descripcion1")?.value;
    //   datoFormulario = true;
    // }

    // if(!formulario.get("descripcion2")?.invalid){
    //   this.stack.tarjeta[1].descripcion = formulario.get("descripcion2")?.value;
    //   datoFormulario = true;
    // }

    // if(!formulario.get("descripcion3")?.invalid){
    //   this.stack.tarjeta[2].descripcion = formulario.get("descripcion3")?.value;
    //   datoFormulario = true;
    // }

    // if(!formulario.get("chip")?.invalid){
    //   this.stack.chips.push(formulario.get("chip")?.value);
    //   datoFormulario = true;
    // }

    // if(datoFormulario){
    //   this.datos.establecerStack(this.stack);
    // }

    this.mostrarVentanaStack = false;
  }

  abrirVentanaEdicion() {
    // tarjeta: { urlImagen: string, descripcion: string }[];
    // chips: string[];
    // let s:Stack = {tarjeta:[{"urlImagen":"./assets/angular.png","descripcion":"Descripcion tarjeta 1"},{"urlImagen":"./assets/spring.png","descripcion":"Descripcion tarjeta 2"},{"urlImagen":"./assets/mysql.png","descripcion":"Descripcion tarjeta 3"}],chips:["Prime NG","Git/GitHub","Scrum","Ng2-Charts","Font Awesome","CSS-Grid","JWT","Java 11"]};
    // sessionStorage.setItem('stack', JSON.stringify(s));

    this.mostrarVentanaStack = true;
  }

  removerChip(indice: number) {
    // this.stack.chips.splice(indice, 1);
    // this.datos.establecerStack(this.stack);
  }
}
