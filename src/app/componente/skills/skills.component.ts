import { Component, OnInit } from '@angular/core';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { Tecnologia } from 'src/app/servicio/Tecnologia';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  mostrarVentanaSkills: boolean;

  esAdministrador: boolean = false;

  tecnologiaActual: Tecnologia;
  tecnologias: Tecnologia[];

  constructor(private datos: DatosBackendService) {
    datos.obtenerEditable().subscribe({
      next:(b)=>{
        
        this.esAdministrador = b;
        console.log(this.esAdministrador);
      }
    });

    this.mostrarVentanaSkills = false;

    this.tecnologiaActual = {} as Tecnologia;

    this.tecnologias = datos.obtenerTecnologias();
  }

  ngOnInit(): void { }

  editarTecnologia(indice: number) {
    if (this.esAdministrador) {
      this.tecnologiaActual = this.tecnologias[indice];
      this.mostrarVentanaSkills = true;
    }
  }

  guardarTecnologia(tecnologia: Tecnologia) {
    this.tecnologias.forEach(t => {
      if (t.id == tecnologia.id) {
        t.valor = tecnologia.valor;
      }
    });

    this.mostrarVentanaSkills = false;
  }
}
