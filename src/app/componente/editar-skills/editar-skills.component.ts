import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { Tecnologia } from 'src/app/servicio/Tecnologia';

@Component({
  selector: 'app-editar-skills',
  templateUrl: './editar-skills.component.html',
  styleUrls: ['./editar-skills.component.css']
})
export class EditarSkillsComponent implements OnInit {

  @Output() guardarTecnologia = new EventEmitter<Tecnologia>();
  @Input() tecnologia: Tecnologia;

  textoAlerta:string = '';
  mostrarAlerta:boolean = false;

  formulario: FormGroup;

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

      this.http.put<string>('https://still-spire-76335.herokuapp.com/api/modificar/tecnologia', this.tecnologia, cabecera).subscribe({
        next: (n) => {
          this.guardarTecnologia.emit(this.tecnologia);
        },
        error: () => {
          this.alternarAlerta('credenciales invalidas');
        }
      });
    }
    else
    {
      this.guardarTecnologia.emit(undefined);
    }
  }

  private alternarAlerta(msj: string) {
    this.textoAlerta = msj;
    this.mostrarAlerta = true;
    setTimeout(() => {
      this.mostrarAlerta = false;
    }, 2000);
  }
}
