import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  @Output() esEditable: EventEmitter<boolean> = new EventEmitter();

  formulario: FormGroup;

  constructor(private http: HttpClient, private datos: DatosBackendService) {
    this.formulario = new FormGroup({
      usuario: new FormControl(''),
      clave: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  enviarCredenciales() {
    if (!this.formulario.invalid) {
      let usuario: string = this.formulario.get("usuario")?.value;
      let clave: string = this.formulario.get("clave")?.value;

      let administrador: { usuario: string, clave: string } = { usuario: "", clave: "" };
      administrador.usuario = usuario;
      administrador.clave = clave;

      let token: string = this.datos.obtenerToken();

      const cabecera = { headers: new HttpHeaders({ 'Authorization': `${token}` }) };

      this.http.post<boolean>('/api/usuario/administrador', administrador, cabecera).subscribe({
        next: (b) => {
          this.esEditable.emit(b);
        },
        error: () => {
          alert('credenciales invalidas');
          this.esEditable.emit(false);
        }
      });
    }
  }
}
