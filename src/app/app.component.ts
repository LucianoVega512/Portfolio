import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  textoAlerta: string = '';

  mostrarAlerta: boolean = false;

  constructor(private http: HttpClient, private datos: DatosBackendService) {
    this.iniciarPortfolio = false;
  }

  ngOnInit(): void { }

  abrirLogin() {
    this.mostrarLogin = true;
  }

  cerrarLogin() {
    this.mostrarLogin = false;
  }

  enviarLogin(formulario: FormGroup) {

    if (!formulario.invalid) {

      let usuario: string = formulario.get("usuario")?.value;
      let clave: string = formulario.get("clave")?.value;

      let credenciales: { nombreUsuario: string, clave: string } = { nombreUsuario: "", clave: "" };

      credenciales.nombreUsuario = usuario;
      credenciales.clave = clave;

      this.http.post<Portafolio>('https://still-spire-76335.herokuapp.com/api/usuario', credenciales).subscribe({
        next: (portafolio) => {
          this.datos.establecerPortfolio(portafolio);
          this.iniciarPortfolio = true;
        },
        
        error: () => {
          this.alternarAlerta("Credenciales invalidas");
        }
      });
    }
  }

  private alternarAlerta(msj: string) {
    this.textoAlerta = msj;
    this.mostrarAlerta = true;
    setTimeout(() => {
      this.mostrarAlerta = false;
    }, 2000);
  }
}
