import { Injectable } from '@angular/core';
import { Portafolio } from './Portafolio';
import { Usuario } from './Usuario';
import { Tarjeta } from './Tarjeta';
import { Chip } from './Chip';
import { Tecnologia } from './Tecnologia';
import { Descripcion } from './Descripcion';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosBackendService {
  mensajeAlerta: string = '';

  portafolio?: Portafolio;

  subject: Subject<boolean> = new Subject();

  constructor() { }
  
  obtenerEditable(): Observable<boolean> {
    return this.subject.asObservable();
  }

  subscribirEditable(estado: boolean) {
    this.subject.next(estado);
  }

  obtenerNombreAcercaDe(): string {
    return this.portafolio?.usuario.nombreAcercaDe as string;
  }

  obtenerToken(): string {
    return this.portafolio?.usuario.token as string;
  }

  establecerPortfolio(_portafolio: Portafolio) {
    this.portafolio = _portafolio;
  }

  obtenerUsuario(): Usuario {
    return this.portafolio?.usuario as Usuario;
  }

  establecerUsuario(usuario: Usuario) {
    this.portafolio!.usuario = usuario;
  }

  obtenerTarjetas(): Tarjeta[] {
    return this.portafolio!.tarjetas;
  }

  obtenerChips(): Chip[] {
    return this.portafolio!.chips;
  }

  obtenerTecnologias(): Tecnologia[] {
    return this.portafolio!.tecnologias;
  }

  obtenerDescripciones(): Descripcion[] {
    return this.portafolio!.descripciones;
  }
}
