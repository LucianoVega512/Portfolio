import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarLogin: boolean = false;

  mostrarLogIn(){
    this.mostrarLogin = !this.mostrarLogin;
  }

}
