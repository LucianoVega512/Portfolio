import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  // campoVacio: boolean = false;

  tecnologiaActual: Tecnologia;
  tecnologias: Tecnologia[];

  // config: string[];

  constructor(private datos: DatosBackendService, private jwt: EstadoJwtService) {
    this.mostrarVentanaSkills = false;

    // this.skills = datos.obtenerSkills();

    // this.config = this.skills.tecnologia;
    this.tecnologiaActual = {} as Tecnologia;

    this.esAdministrador = jwt.esAdministrador();

    this.tecnologias = datos.obtenerTecnologias();
  }

  ngOnInit(): void {
    // this.campoVacio = false;

  }

  editarTecnologia(indice: number) {
    if (this.esAdministrador) {

      // tecnologia a modificar
      this.tecnologiaActual = this.tecnologias[indice];
      this.mostrarVentanaSkills = true;
    }
  }

  validarFormulario(formulario: FormGroup) {
    // this.validarCampo(formulario, "valor1", 0);
    // this.validarCampo(formulario, "valor2", 1);
    // this.validarCampo(formulario, "valor3", 2);
    // this.validarCampo(formulario, "valor4", 3);
    // this.validarCampo(formulario, "valor5", 4);
    // this.validarCampo(formulario, "valor6", 5);

    // if (this.campoVacio) {
    //   this.datos.establecerSkills(this.skills);
    // }

    // this.mostrarVentanaSkills = false;
  }

  guardarTecnologia(tecnologia: Tecnologia) {
    // this.portafolio!.tarjetas.forEach(t => {
    //   if(t.id == tarjeta.id){
    //     t.descripcion = tarjeta.descripcion;
    //   }
    // });
    // this.mostrarVentanaStack = false;

    this.tecnologias.forEach(t => {
      if (t.id == tecnologia.id) {
        t.valor = tecnologia.valor;
      }
    });

    this.mostrarVentanaSkills = false;
  }

  private validarCampo(form: FormGroup, campo: string, indice: number) {
    // if (!form.get(campo)?.invalid) {
    //   this.skills.valor[indice] = form.get(campo)?.value;
    //   this.campoVacio = true;
    // }
  }

  abrirVentana() {
    this.mostrarVentanaSkills = true;
  }

}
