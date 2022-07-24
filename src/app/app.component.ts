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

  constructor(private jwt: EstadoJwtService) {
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
    let usr: Usuario = { clave: "", id: 0, nombre: "", rol: "", token: "" };

    setTimeout(() => {
      //Obtener usuario desde BE
      //si es correcto
      usr = JSON.parse(<string>sessionStorage.getItem('usuario'));
      this.jwt.establecerUsuario(usr);
      
      this.iniciarPorfolio = this.jwt.estaLogueado();

    }, 3000);

    

    // ;


    // sessionStorage.setItem('token', '91089389hjfjhsdj8u3uriou4');

    //si jwt correcto, obtener acerca de
    // this.administrador = this.jwt.esAdministrador();

    // this.iniciarPorfolio = true;
  }

}
