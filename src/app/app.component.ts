import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EstadoJwtService } from './servicio/estado-jwt.service';
import { Usuario } from './servicio/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mostrarLogin: boolean = false;
  iniciarPorfolio: boolean = false;

  constructor(private jwt: EstadoJwtService, private http: HttpClient) { }

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
    let usr: Usuario = { clave: "", id: 0, nombre: "", rol: "", token: "" };

    this.http.post<Usuario>('/api/usuario', { nombre: "usuario2", clave: "12345" }).subscribe({
      next: (usuario) => {
        usr = usuario;
        this.jwt.establecerUsuario(usr);
        this.iniciarPorfolio = this.jwt.estaLogueado();
      },
      error: () => alert('credenciales invalidas')
    });
  }
}
