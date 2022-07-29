import { Component, OnInit } from '@angular/core';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { Usuario } from 'src/app/servicio/Usuario';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  esAdministrador: boolean = false;

  mostrarVentanaAcercaDe: boolean = false;

  nombreAcercaDe: string = '';

  constructor(private datos: DatosBackendService) {
    datos.obtenerEditable().subscribe({
      next: (b) => {
        this.esAdministrador = b;
      }
    });

    this.nombreAcercaDe = datos.obtenerNombreAcercaDe();
  }

  ngOnInit(): void {
  }

  desplegarVentanaAcercaDe() {
    this.mostrarVentanaAcercaDe = true;
  }

  validarAcercaDe(usuario: Usuario | undefined) {
    if (usuario != undefined) 
    {
      this.nombreAcercaDe = usuario.nombreAcercaDe;
      this.datos.establecerUsuario(usuario);
    }

    this.mostrarVentanaAcercaDe = false;
  }
}
