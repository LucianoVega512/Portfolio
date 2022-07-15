import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Output() abrirLogin = new EventEmitter<undefined>();
  @Input() botonEditar: boolean;

  constructor() {
    this.botonEditar = false;
  }

  ngOnInit(): void {
  }

  mostrarVentanaLogin() {
    this.abrirLogin.emit();
  }

}
