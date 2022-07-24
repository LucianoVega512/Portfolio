import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { EstadoJwtService } from 'src/app/servicio/estado-jwt.service';
import { Skills } from 'src/app/servicio/Skills';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  mostrarVentanaSkills: boolean;

  esAdministrador:boolean;

  campoVacio: boolean = false;

  skills: Skills;
  config:string[];

  constructor(private datos: DatosBackendService, private jwt:EstadoJwtService) {
    this.mostrarVentanaSkills = false;

    this.skills = datos.obtenerSkills();

    this.config = this.skills.tecnologia;

    this.esAdministrador = jwt.esAdministrador();
  }

  ngOnInit(): void {
    this.campoVacio= false;

  }

  validarFormulario(formulario: FormGroup) {
    this.validarCampo(formulario, "valor1", 0);
    this.validarCampo(formulario, "valor2", 1);
    this.validarCampo(formulario, "valor3", 2);
    this.validarCampo(formulario, "valor4", 3);
    this.validarCampo(formulario, "valor5", 4);
    this.validarCampo(formulario, "valor6", 5);

    if(this.campoVacio){
      this.datos.establecerSkills(this.skills);
    }

    this.mostrarVentanaSkills = false;
  }

  private validarCampo(form: FormGroup, campo: string, indice:number) {
    if (!form.get(campo)?.invalid) {
      this.skills.valor[indice] = form.get(campo)?.value;
      this.campoVacio = true;
    }
  }

  abrirVentana() {
    this.mostrarVentanaSkills = true;
  }

}
