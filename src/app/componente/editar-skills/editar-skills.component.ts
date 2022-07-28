import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { Tecnologia } from 'src/app/servicio/Tecnologia';
// import { Skills } from 'src/app/servicio/Skills';

@Component({
  selector: 'app-editar-skills',
  templateUrl: './editar-skills.component.html',
  styleUrls: ['./editar-skills.component.css']
})
export class EditarSkillsComponent implements OnInit {

  @Output() guardarTecnologia = new EventEmitter<Tecnologia>();
  @Input() tecnologia: Tecnologia;

  formulario: FormGroup;


  configuraciones: { claseRango: string, nombreCampo: string }[] = [
    { claseRango: "rango1", nombreCampo: "valor1" },
    { claseRango: "rango2", nombreCampo: "valor2" },
    { claseRango: "rango3", nombreCampo: "valor3" },
    { claseRango: "rango4", nombreCampo: "valor4" },
    { claseRango: "rango5", nombreCampo: "valor5" },
    { claseRango: "rango6", nombreCampo: "valor6" }
  ];

  constructor(private http: HttpClient, private datos: DatosBackendService) {
    this.formulario = new FormGroup({
      valor: new FormControl('')
    });

    this.tecnologia = <Tecnologia>{};
  }

  ngOnInit(): void {
  }

  enviarTecnologia(){
    if (!this.formulario.get("valor")?.invalid) {
      this.tecnologia.valor = this.formulario.get("valor")?.value;

      let token: string = this.datos.obtenerToken();

      const cabecera = { headers: new HttpHeaders({ 'Authorization': `${token}` }) };

      this.http.put<string>('api/modificar/tecnologia', this.tecnologia, cabecera).subscribe({
        next: (n) => {
          this.guardarTecnologia.emit(this.tecnologia);
        },
        error: () => {
          alert('credenciales invalidas');
        }
      });
    }
  }
  // validarDatosSkills() {
  //   this.validarFormulario.emit(this.formulario);
  // }

}
