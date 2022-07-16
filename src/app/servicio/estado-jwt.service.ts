import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoJwtService {

  constructor() { }

  estaLogueado():boolean{
    return sessionStorage.getItem('token') != null;
  }
}
