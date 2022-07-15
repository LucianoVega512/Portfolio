import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { timeout } from 'rxjs';

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

  login(){
    // setTimeout(() => {
      this.estadoLogin.emit(true);  
      
    // }, 3000);
    
    this.cerrarVentanaLogin.emit(true);
  }

}
