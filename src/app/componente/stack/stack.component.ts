import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chip } from 'src/app/servicio/Chip';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { Tarjeta } from 'src/app/servicio/Tarjeta';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  mostrarVentanaStack: boolean;

  mostrarCrearChip: boolean;

  esAdministrador: boolean = false;

  tarjetaActual: Tarjeta;

  tarjetas: Tarjeta[];
  chips: Chip[];


  clases: string[] = ["contenedor-tarjeta1", "contenedor-tarjeta2", "contenedor-tarjeta3"];

  constructor(private datos: DatosBackendService, private http: HttpClient) {
    datos.obtenerEditable().subscribe({
      next:(b)=>{
        
        this.esAdministrador = b;
        console.log(this.esAdministrador);
      }
    });

    this.mostrarVentanaStack = false;

    this.mostrarCrearChip = false;

    this.tarjetaActual = {} as Tarjeta;

    this.tarjetas = datos.obtenerTarjetas();

    this.chips = datos.obtenerChips();
    
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
    this.tarjetas.forEach(t => {
      if (t.id == tarjeta.id) {
        t.descripcion = tarjeta.descripcion;
      }
    });

    this.mostrarVentanaStack = false;
  }

  guardarChip(chip: Chip) {

    this.chips.push(chip);
    this.mostrarCrearChip = false;
  }

  abrirVentanaCrearChip() {
    this.mostrarCrearChip = true;
  }

  removerChip(indice: number) {
    let token: string = this.datos.obtenerToken();
    let cabecera: HttpHeaders = new HttpHeaders({ 'Authorization': `${token}` });

    this.http.delete('api/eliminar/chip', { headers: cabecera, body: this.chips[indice] }).subscribe({
      next: (n) => {
        this.chips.splice(indice, 1);
      },
      error: () => {
        alert('credenciales invalidas');
      }
    });
  }
}
