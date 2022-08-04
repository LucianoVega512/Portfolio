import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  @Output() esEditable: EventEmitter<boolean> = new EventEmitter();

  textoAlerta: string = '';

  mostrarAlerta: boolean = false;

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

      this.http.post<boolean>('https://still-spire-76335.herokuapp.com/api/usuario/administrador', administrador, cabecera).subscribe({
        next: (b) => {
          if (b) {
            this.esEditable.emit(b);
          }
          else {
            this.alternarAlerta("Usuario/Clave incorrecto");
          }
        },
        error: (e) => {
          this.alternarAlerta("Credenciales vencidas");
        }
      });
    }
    else {
      this.esEditable.emit(false);
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
