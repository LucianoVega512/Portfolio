import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  mostrarVentanaAcercaDe:boolean;

  constructor() { 
    this.mostrarVentanaAcercaDe = false;
  }

  ngOnInit(): void {
  }

  desplegarVentanaAcercaDe(){
    this.mostrarVentanaAcercaDe = true;
  }

  cerrarVentana(){
    this.mostrarVentanaAcercaDe = false;
  }
}
