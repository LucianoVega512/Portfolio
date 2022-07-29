import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() cerrarVentanaLogin = new EventEmitter<boolean>();
  @Output() enviarLogin = new EventEmitter<FormGroup>();

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      usuario: new FormControl(''),
      clave: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.enviarLogin.emit(this.formulario);
    this.cerrarVentanaLogin.emit(true);
  }

}
