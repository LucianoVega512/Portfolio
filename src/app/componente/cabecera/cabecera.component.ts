import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AcercaDe } from 'src/app/servicio/AcercaDe';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Output() abrirLogin = new EventEmitter<undefined>();
  
  acercaDe:AcercaDe;
  

  constructor(private datos: DatosBackendService) {
    this.acercaDe = datos.obtenerAcercaDe();
  }

  ngOnInit(): void {
  }

  mostrarVentanaLogin() {
    this.abrirLogin.emit();
  }

}
