import { Component, OnInit } from '@angular/core';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { EstadoJwtService } from 'src/app/servicio/estado-jwt.service';
import { Tecnologia } from 'src/app/servicio/Tecnologia';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  mostrarVentanaSkills: boolean;

  esAdministrador: boolean;

  tecnologiaActual: Tecnologia;
  tecnologias: Tecnologia[];

  constructor(private datos: DatosBackendService, private jwt: EstadoJwtService) {
    this.mostrarVentanaSkills = false;

    this.tecnologiaActual = {} as Tecnologia;

    this.esAdministrador = jwt.esAdministrador();

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
