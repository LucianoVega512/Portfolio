import { Injectable } from '@angular/core';
import { Skills } from './Skills'
import { Proyectos } from './Proyectos';
import { AcercaDe } from './AcercaDe';
import { Portafolio } from './Portafolio';
import { Usuario } from './Usuario';
import { Tarjeta } from './Tarjeta';
import { Chip } from './Chip';

@Injectable({
  providedIn: 'root'
})
export class DatosBackendService {

  portafolio?: Portafolio;

  constructor() {
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

  establecerTarjeta(tarjeta: Tarjeta) {
    this.portafolio!.tarjetas.forEach(t => {
      if(t.id == tarjeta.id){
        t.descripcion = tarjeta.descripcion;
      }
    });
  }

  obtenerTarjetas(): Tarjeta[] {
    return this.portafolio!.tarjetas;
  }

  obtenerChips(): Chip[] {
    return this.portafolio!.chips;
  }

  // -----------------------------------------------------------------

  obtenerAcercaDe(): AcercaDe {
    //obtener acerca-de desde BE
    return JSON.parse(<string>sessionStorage.getItem('acerca-de'));
  }

  establecerAcercaDe(acercaDe: AcercaDe) {
    //enviar proyectos a la BD
    sessionStorage.setItem('acerca-de', JSON.stringify(acercaDe));
  }

  obtenerProyectos(): Proyectos {
    //obtener proyectos desde BE
    return JSON.parse(<string>sessionStorage.getItem('proyectos'));
  }

  establecerProyectos(proyectos: Proyectos) {
    //enviar proyectos a la BD
    sessionStorage.setItem('proyectos', JSON.stringify(proyectos));
  }

  obtenerSkills(): Skills {
    //obtener stack desde BE
    return JSON.parse(<string>sessionStorage.getItem('skills'));
  }

  establecerSkills(skills: Skills) {
    //enviar skills a la BD
    sessionStorage.setItem('skills', JSON.stringify(skills));
  }
}
