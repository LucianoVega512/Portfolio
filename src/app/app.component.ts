import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarLogin: boolean = false;
  iniciarPorfolio: boolean = false;
  activarBotonEditar: boolean = false;

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
      this.activarBotonEditar = true;
    }, 3000);
  }
}
