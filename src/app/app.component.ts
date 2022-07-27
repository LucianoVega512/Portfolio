import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatosBackendService } from './servicio/datos-backend.service';
import { EstadoJwtService } from './servicio/estado-jwt.service';
import { Portafolio } from './servicio/Portafolio';
import { Usuario } from './servicio/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mostrarLogin: boolean = false;
  iniciarPorfolio: boolean = false;

  constructor(private jwt: EstadoJwtService, private http: HttpClient, private datos:DatosBackendService) { }

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
    // let usr: Usuario = { clave: "", id: 0, nombre: "", rol: "", token: "" };

    this.http.post<Portafolio>('/api/usuario', { nombreUsuario: "luciano", clave: "1234" }).subscribe({
      next: (portafolio) => {
        // usr = usuario;
        // this.jwt.establecerUsuario(usr);
        // this.iniciarPorfolio = this.jwt.estaLogueado();
        this.datos.establecerPortfolio(portafolio);
        this.iniciarPorfolio = true;
      },
      error: () => alert('credenciales invalidas')
    });
  }
}
