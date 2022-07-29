import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatosBackendService } from './servicio/datos-backend.service';
import { Portafolio } from './servicio/Portafolio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mostrarLogin: boolean = false;
  iniciarPortfolio: boolean;

  constructor(private http: HttpClient, private datos:DatosBackendService) { 
    this.iniciarPortfolio = false;
  }

  ngOnInit(): void {
    // this.iniciarPorfolio = this.jwt.estaLogueado();
  }

  abrirLogin() {
    this.mostrarLogin = true;
  }

  cerrarLogin() {
    this.mostrarLogin = false;
  }

  estadoLogin(estado: boolean) {

    this.http.post<Portafolio>('/api/usuario', { nombreUsuario: "luciano", clave: "1234" }).subscribe({
      next: (portafolio) => {
        // usr = usuario;
        // this.jwt.establecerUsuario(usr);
        // this.iniciarPorfolio = this.jwt.estaLogueado();
        this.datos.establecerPortfolio(portafolio);
        this.iniciarPortfolio = true;
      },
      error: () => alert('credenciales invalidas')
    });
  }
}
