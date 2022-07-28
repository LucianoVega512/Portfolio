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

  formulario: FormGroup;

  stacks: { claseTarjeta: string, span: string, nombreCampo: string }[] = [
    { claseTarjeta: "tarjeta1", span: "Descripcion 1", nombreCampo: "descripcion1" },
    { claseTarjeta: "tarjeta2", span: "Descripcion 2", nombreCampo: "descripcion2" },
    { claseTarjeta: "tarjeta3", span: "Descripcion 3", nombreCampo: "descripcion3" },
    { claseTarjeta: "chip", span: "Agregar chip", nombreCampo: "chip" }
  ];

  constructor(private http: HttpClient, private datos: DatosBackendService) {
    this.formulario = new FormGroup({
      descripcion: new FormControl(''),
      // descripcion2: new FormControl(''),
      // descripcion3: new FormControl(''),
      // chip: new FormControl('')
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

      this.http.put<string>('api/modificar/tarjeta', this.tarjeta, cabecera).subscribe({
        next: (n) => {
          this.guardarTarjeta.emit(this.tarjeta);
        },
        error: () => {
          alert('credenciales invalidas');
        }
      });
    }
  }



}
