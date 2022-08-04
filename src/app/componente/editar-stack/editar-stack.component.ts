import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';
import { Tarjeta } from 'src/app/servicio/Tarjeta';

@Component({
  selector: 'app-editar-stack',
  templateUrl: './editar-stack.component.html',
  styleUrls: ['./editar-stack.component.css']
})
export class EditarStackComponent implements OnInit {

  @Output() guardarTarjeta = new EventEmitter<Tarjeta>();
  @Input() tarjeta: Tarjeta;

  textoAlerta: string = '';
  mostrarAlerta: boolean = false;

  formulario: FormGroup;

  constructor(private http: HttpClient, private datos: DatosBackendService) {
    this.formulario = new FormGroup({
      descripcion: new FormControl('')
    });

    this.tarjeta = <Tarjeta>{};
  }

  ngOnInit(): void {
  }

  enviarTarjeta() {
    if (!this.formulario.get("descripcion")?.invalid) {
      this.tarjeta.descripcion = this.formulario.get("descripcion")?.value;
      let token: string = this.datos.obtenerToken();

      const cabecera = { headers: new HttpHeaders({ 'Authorization': `${token}` }) };

      this.http.put<string>('https://still-spire-76335.herokuapp.com/api/modificar/tarjeta', this.tarjeta, cabecera).subscribe({
        next: (n) => {
          this.guardarTarjeta.emit(this.tarjeta);
        },
        error: () => {
          this.alternarAlerta('credenciales invalidas');
        }
      });
    }
    else {
      this.guardarTarjeta.emit(undefined);
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
