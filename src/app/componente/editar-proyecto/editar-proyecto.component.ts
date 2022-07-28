import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { Descripcion } from 'src/app/servicio/Descripcion';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  @Output() guardarDescripcion: EventEmitter<Descripcion> = new EventEmitter();
  @Input() descripcion:Descripcion; 

  formulario:FormGroup;

  proyectos: string[] = ["descripcion1", "descripcion2", "descripcion3"];

  constructor(private http: HttpClient, private datos: DatosBackendService) {
    this.formulario = new FormGroup({
      descripcion: new FormControl('')
    });

    this.descripcion = {} as Descripcion;
  }

  ngOnInit(): void {
  }

  enviarProyecto(){
    if (!this.formulario.get("descripcion")?.invalid) {
      this.descripcion.descripcionProyecto = this.formulario.get("descripcion")?.value;

      let token: string = this.datos.obtenerToken();

      const cabecera = { headers: new HttpHeaders({ 'Authorization': `${token}` }) };

      this.http.put<string>('api/modificar/descripcion', this.descripcion, cabecera).subscribe({
        next: (n) => {
          this.guardarDescripcion.emit(this.descripcion);
        },
        error: () => {
          alert('credenciales invalidas');
        }
      });
    }
  }

  // cerrarVentanaProyectos() {
  //   this.validarProyectos.emit(this.formulario);
  // }

}
