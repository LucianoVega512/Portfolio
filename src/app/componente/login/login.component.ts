import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() cerrarVentanaLogin = new EventEmitter<boolean>();
  @Output() estadoLogin = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.estadoLogin.emit(true);
    this.cerrarVentanaLogin.emit(true);
  }

}
