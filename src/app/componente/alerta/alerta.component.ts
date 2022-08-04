import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatosBackendService } from 'src/app/servicio/datos-backend.service';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  @Output() cerrarVentanaAlerta: EventEmitter<undefined> = new EventEmitter<undefined>();

  @Input() mensajeAlerta: string = '';

  constructor(private datos: DatosBackendService) { }

  ngOnInit(): void { }

  cerrarAlerta() {
    this.cerrarVentanaAlerta.emit(undefined);
  }
}
