import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  mostrarCrearChip: boolean;

  esAdministrador: boolean;

  claseTextoTarjeta: string = "texto-tarjeta";

  tarjetaActual: Tarjeta;

  tarjetas: Tarjeta[];
  chips: Chip[];


  clases: string[] = ["contenedor-tarjeta1", "contenedor-tarjeta2", "contenedor-tarjeta3"];

  constructor(private datos: DatosBackendService, private jwt: EstadoJwtService, private http: HttpClient) {
    this.mostrarVentanaStack = false;

    this.mostrarCrearChip = false;

    this.tarjetaActual = {} as Tarjeta;

    this.tarjetas = datos.obtenerTarjetas();

    this.chips = datos.obtenerChips();

    this.esAdministrador = jwt.esAdministrador();
  }

  ngOnInit(): void {
  }

  editarTarjeta(indice: number) {
    if (this.esAdministrador) {

      // tarjeta a modificar
      this.tarjetaActual = this.tarjetas[indice];
      this.mostrarVentanaStack = true;
    }
  }

  // Ver esta linea 
  guardarTarjeta(tarjeta: Tarjeta) {
    this.datos.establecerTarjeta(tarjeta);
    this.tarjetas = this.datos.obtenerTarjetas();
    this.mostrarVentanaStack = false;
  }

  guardarChip(chip: Chip) {

    this.chips.push(chip);
    this.mostrarCrearChip = false;
  }

  // abrirVentanaEditarTarjeta() {
  // tarjeta: { urlImagen: string, descripcion: string }[];
  // chips: string[];
  // let s:Stack = {tarjeta:[{"urlImagen":"./assets/angular.png","descripcion":"Descripcion tarjeta 1"},{"urlImagen":"./assets/spring.png","descripcion":"Descripcion tarjeta 2"},{"urlImagen":"./assets/mysql.png","descripcion":"Descripcion tarjeta 3"}],chips:["Prime NG","Git/GitHub","Scrum","Ng2-Charts","Font Awesome","CSS-Grid","JWT","Java 11"]};
  // sessionStorage.setItem('stack', JSON.stringify(s));

  //   this.mostrarVentanaStack = true;
  // }

  abrirVentanaCrearChip() {
    this.mostrarCrearChip = true;
  }

  removerChip(indice: number) {

    // this.http.request('DELETE', url, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),
    //   body: { foo: bar }
    // });


    let token: string = this.datos.obtenerToken();

    // let cabecera = { headers: new HttpHeaders({ 'Authorization': `${token}` }) };
    let cabecera: HttpHeaders = new HttpHeaders({ 'Authorization': `${token}` });

    // this.http.request('DELETE', 'api/eliminar/chip', cabecera, body:this.chips[indice]).subscribe({
    this.http.delete('api/eliminar/chip', { headers: cabecera, body: this.chips[indice] }).subscribe({
      next: (n) => {
        this.chips.splice(indice, 1);
      },
      error: () => {
        alert('credenciales invalidas');
      }
    }
    );

    // this.http.delete<string>('api/eliminar/chip/', this.chips[indice], cabecera).subscribe({
    //   next: (n) => {
    //     
    //   },
    //   error: () => {
    //     alert('credenciales invalidas');
    //   }
    // });
    // }

  }
}
