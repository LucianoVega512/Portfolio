import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  mostrarVentanaStack: boolean;

  constructor() {
    this.mostrarVentanaStack = false;
  }

  cerrarVentana(){
    this.mostrarVentanaStack = false;
  }

  abrirVentanaEdicion(){
    this.mostrarVentanaStack = true;
  }


  ngOnInit(): void {
  }

}
