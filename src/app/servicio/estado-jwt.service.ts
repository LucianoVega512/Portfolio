import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class EstadoJwtService {

  esAdministrador():boolean{
    return true;
  }
}
