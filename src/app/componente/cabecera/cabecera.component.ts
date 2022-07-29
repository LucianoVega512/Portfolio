import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { AcercaDe } from 'src/app/servicio/AcercaDe';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Output() abrirLogin = new EventEmitter<undefined>();
  

  constructor(private datos: DatosBackendService) {
  }

  ngOnInit(): void {
  }

  mostrarVentanaLogin() {
    this.abrirLogin.emit();
  }

}
