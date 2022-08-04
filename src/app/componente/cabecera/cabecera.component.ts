import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Output() abrirLogin = new EventEmitter<undefined>();

  @Input() inicioSesion:boolean;

  cerrarVentanaAdmin:boolean;
  

  constructor(private datos: DatosBackendService) {
    this.inicioSesion=false;
    this.cerrarVentanaAdmin = false;
  }

  ngOnInit(): void {
  }

  abrirVentanaAdmin(){
    this.cerrarVentanaAdmin = true;
  }

  esEditable(editable:boolean){
    this.datos.subscribirEditable(editable);
    
    this.cerrarVentanaAdmin = false; 
  }

  mostrarVentanaLogin() {
    this.abrirLogin.emit();
  }
}
