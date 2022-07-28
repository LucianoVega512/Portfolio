import { Component, Input, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// import { AcercaDe } from 'src/app/servicio/AcercaDe';
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
    // this.acercaDe = datos.obtenerAcercaDe();  
    this.nombreAcercaDe = datos.obtenerNombreAcercaDe();
    
    this.esAdministrador = jwt.esAdministrador();
  }

  ngOnInit(): void {
  }

  desplegarVentanaAcercaDe() {
    this.mostrarVentanaAcercaDe = true;
  }

  validarAcercaDe(usuario: Usuario) {
  //   let datoFormulario: boolean = false;

  //   if (!formulario.get("nombre")?.invalid) {
  //     this.acercaDe.nombre = formulario.get("nombre")?.value;
  //     datoFormulario = true;
  //   }

  //   if (datoFormulario) {
  //     this.datos.establecerAcercaDe(this.acercaDe);
  //   }
    this.nombreAcercaDe = usuario.nombreAcercaDe;

    this.datos.establecerUsuario(usuario);

    this.mostrarVentanaAcercaDe = false;
  }
}
