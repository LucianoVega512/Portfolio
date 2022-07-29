import { Component, Input, OnInit } from '@angular/core';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { EstadoJwtService } from 'src/app/servicio/estado-jwt.service';
import { Usuario } from 'src/app/servicio/Usuario';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  esAdministrador:boolean;

  mostrarVentanaAcercaDe: boolean = false;

  nombreAcercaDe: string = '';

  constructor(private datos: DatosBackendService, private jwt:EstadoJwtService) {
    this.nombreAcercaDe = datos.obtenerNombreAcercaDe();
    
    this.esAdministrador = jwt.esAdministrador();
  }

  ngOnInit(): void {
  }

  desplegarVentanaAcercaDe() {
    this.mostrarVentanaAcercaDe = true;
  }

  validarAcercaDe(usuario: Usuario) {
    this.nombreAcercaDe = usuario.nombreAcercaDe;

    this.datos.establecerUsuario(usuario);

    this.mostrarVentanaAcercaDe = false;
  }
}
