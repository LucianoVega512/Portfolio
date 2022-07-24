import { Injectable } from '@angular/core';
import { Stack } from './Stack';
import {Skills} from './Skills'
import { Proyectos } from './Proyectos';

@Injectable({
  providedIn: 'root'
})
export class DatosBackendService {

  constructor() {
  }

  obtenerProyectos():Proyectos{
    //obtener proyectos desde BE
    return JSON.parse(<string>sessionStorage.getItem('proyectos'));
  }

  establecerProyectos(proyectos:Proyectos){
    //enviar proyectos a la BD
    sessionStorage.setItem('proyectos', JSON.stringify(proyectos));
  }

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

}
