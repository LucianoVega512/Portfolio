import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class EstadoJwtService {

  usuario?:Usuario;

  constructor() { }

  estaLogueado():boolean{
    return <number>this.usuario?.token.length > 0;
  }

  establecerUsuario(usr:Usuario){
    //Obtener Usuario desde bd
    // setTimeout(() => {
    //   this.usuario = JSON.parse(<string>sessionStorage.getItem('usuario'));
    // }, 3000);
    this.usuario = usr;
  }





  esAdministrador():boolean{
    // return this.usuario?.rol == "administrador";
    return true;
  }
}
