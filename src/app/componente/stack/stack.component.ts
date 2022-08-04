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
  textoAlerta:string = '';
    mostrarAlerta:boolean = false;

  mostrarVentanaStack: boolean;

  mostrarCrearChip: boolean;

  esAdministrador: boolean = false;

  tarjetaActual: Tarjeta;

  tarjetas: Tarjeta[];
  chips: Chip[];


  clases: string[] = ["contenedor-tarjeta1", "contenedor-tarjeta2", "contenedor-tarjeta3"];

  constructor(private datos: DatosBackendService, private http: HttpClient) {
    datos.obtenerEditable().subscribe({
      next: (b) => {
        this.esAdministrador = b;
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
      this.tarjetaActual = this.tarjetas[indice];
      this.mostrarVentanaStack = true;
    }
  }


  guardarTarjeta(tarjeta: Tarjeta | undefined) {
    if (tarjeta != undefined) 
    {
      this.tarjetas.forEach(t => {
        if (t.id == tarjeta.id) {
          t.descripcion = tarjeta.descripcion;
        }
      });
    }

    this.mostrarVentanaStack = false;
  }

  guardarChip(chip: Chip | undefined) {
    if (chip != undefined) 
    {
      this.chips.push(chip);
    }

    this.mostrarCrearChip = false;
  }

  abrirVentanaCrearChip() {
    this.mostrarCrearChip = true;
  }

  removerChip(indice: number) {
    let token: string = this.datos.obtenerToken();
    let cabecera: HttpHeaders = new HttpHeaders({ 'Authorization': `${token}` });

    this.http.delete('https://still-spire-76335.herokuapp.com/api/eliminar/chip', { headers: cabecera, body: this.chips[indice] }).subscribe({
      next: (n) => {
        this.chips.splice(indice, 1);
      },
      error: () => {
        this.alternarAlerta('credenciales invalidas');
      }
    });
  }

  private alternarAlerta(msj: string) {
    this.textoAlerta = msj;
    this.mostrarAlerta = true;
    setTimeout(() => {
      this.mostrarAlerta = false;
    }, 2000);
  }
}
