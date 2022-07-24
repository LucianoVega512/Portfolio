import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AcercaDe } from 'src/app/servicio/AcercaDe';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  mostrarVentanaAcercaDe: boolean = false;

  acercaDe: AcercaDe;

  constructor(private datos: DatosBackendService) {
    this.acercaDe = datos.obtenerAcercaDe();
  }

  ngOnInit(): void {
  }

  desplegarVentanaAcercaDe() {
    this.mostrarVentanaAcercaDe = true;
  }

  validarAcercaDe(formulario: FormGroup) {
    let datoFormulario: boolean = false;

    if (!formulario.get("nombre")?.invalid) {
      this.acercaDe.nombre = formulario.get("nombre")?.value;
      datoFormulario = true;
    }

    if (datoFormulario) {
      this.datos.establecerAcercaDe(this.acercaDe);
    }

    this.mostrarVentanaAcercaDe = false;
  }
}
