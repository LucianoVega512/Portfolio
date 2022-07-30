import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { Usuario } from 'src/app/servicio/Usuario';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  @Output() validarAcercaDe: EventEmitter<Usuario> = new EventEmitter();

  formulario: FormGroup;

  usuario: Usuario;

  constructor(private http: HttpClient, private datos: DatosBackendService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('')
    })

    this.usuario = datos.obtenerUsuario();
  }

  ngOnInit(): void {
  }

  cerrarVentanaAcercaDe() {
    if (!this.formulario.get("nombre")?.invalid) 
    {
      let nombre: string = this.formulario.get("nombre")?.value;
      this.usuario.nombreAcercaDe = nombre;
      let token: string = this.usuario.token;

      const cabecera = { headers: new HttpHeaders({ 'Authorization': `${token}` }) };

      this.http.put<string>('api/modificar/acerca_de', this.usuario, cabecera).subscribe({
        next: (n) => {
          this.usuario.nombreAcercaDe = nombre;
          this.validarAcercaDe.emit(this.usuario);
        },
        error: () => {
          alert('credenciales invalidas');
          this.validarAcercaDe.emit(undefined);
        }
      });
    }
    else 
    {
      this.validarAcercaDe.emit(undefined);
    }
  }

}
