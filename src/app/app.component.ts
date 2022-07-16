import { Component, OnInit } from '@angular/core';
import { EstadoJwtService } from './servicio/estado-jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  mostrarLogin: boolean = false;
  iniciarPorfolio: boolean = false;
  // activarBotonEditar: boolean = false;

  constructor(private jwt:EstadoJwtService){
  }

  ngOnInit(): void {
    this.iniciarPorfolio = this.jwt.estaLogueado();
  }

  abrirLogin() {
    this.mostrarLogin = true;
  }

  cerrarLogin() {
    this.mostrarLogin = false;
  }

  estadoLogin(estado: boolean) {
    setTimeout(() => {
      sessionStorage.setItem('token', '91089389hjfjhsdj8u3uriou4');
      this.iniciarPorfolio = true;
      // this.activarBotonEditar = true;
    }, 3000);
  }
}
