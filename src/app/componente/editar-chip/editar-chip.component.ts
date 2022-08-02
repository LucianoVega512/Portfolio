import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Chip } from 'src/app/servicio/Chip';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';

@Component({
  selector: 'app-editar-chip',
  templateUrl: './editar-chip.component.html',
  styleUrls: ['./editar-chip.component.css']
})
export class EditarChipComponent implements OnInit {
  @Output() guardarChip = new EventEmitter<Chip>();

  formulario: FormGroup;

  constructor(private http: HttpClient, private datos: DatosBackendService) {
    this.formulario = new FormGroup({
      chip: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  enviarChip() {
    if (!this.formulario.get("chip")?.invalid) 
    {
      let chip: Chip = <Chip>{};
      chip.id = 0;
      chip.chipDescripcion = this.formulario.get("chip")?.value;
      let token: string = this.datos.obtenerToken();

      const cabecera = { headers: new HttpHeaders({ 'Authorization': `${token}` }) };

      this.http.post<string>('https://still-spire-76335.herokuapp.com/api/crear/chip', chip, cabecera).subscribe({
        next: (n) => {
          this.guardarChip.emit(chip);
        },
        error: () => {
          alert('credenciales invalidas');
          this.guardarChip.emit(undefined);
        }
      });
    }
    else
    {
      this.guardarChip.emit(undefined);
    }
  }
}
