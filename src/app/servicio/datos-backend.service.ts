import { Injectable } from '@angular/core';
import { Portfolio } from './Portfolio';
import { Stack } from './Stack';
import {Skills} from './Skills'

@Injectable({
  providedIn: 'root'
})
export class DatosBackendService {

  portfolio?: Portfolio;

  constructor() {
    this.portfolio = undefined;
  }

  // obtenerDatosBackEnd() {
  //   //enviar solicitud y guardar en session storage
  // }

  // obtenerChips(): string[] {
  //   return this.obtenerPortfolio().stack.chips;
  // }

  // obtenerTarjetas():{ urlImagen: string, descripcion: string }[]{
  //   return this.obtenerPortfolio().stack.tarjeta;
  // }

  obtenerSkills():Skills{
    //obtener stack desde BE
    return JSON.parse(<string>sessionStorage.getItem('skills'));
  }

  establecerSkills(skills:Skills){
    //enviar skills a la BD
    sessionStorage.setItem('skills', JSON.stringify(skills));
  }


  obtenerStack():Stack{
    //obtener stack desde BE
    return JSON.parse(<string>sessionStorage.getItem('stack'));
  }

  establecerStack(stack:Stack){
    //enviar stack a la BD
    sessionStorage.setItem('stack', JSON.stringify(stack));
  }



  // private obtenerObjStack(): Stack {
  //   return JSON.parse(<string>sessionStorage.getItem('stack'));
  // }

  private obtenerPortfolio(): Portfolio {
    return JSON.parse(<string>sessionStorage.getItem('portfolio'));
  }

  establecerChips(chips:string[]){

  }

  establecerPortfolio() {
  }


}
