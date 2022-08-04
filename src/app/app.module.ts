import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GaugeModule } from 'angular-gauge';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componente/cabecera/cabecera.component';
import { AcercaDeComponent } from './componente/acerca-de/acerca-de.component';
import { StackComponent } from './componente/stack/stack.component';
import { ProyectosComponent } from './componente/proyectos/proyectos.component';
import { SkillsComponent } from './componente/skills/skills.component';
import { LoginComponent } from './componente/login/login.component';
import { EditarAcercaDeComponent } from './componente/editar-acerca-de/editar-acerca-de.component';
import { EditarStackComponent } from './componente/editar-stack/editar-stack.component';
import { EditarSkillsComponent } from './componente/editar-skills/editar-skills.component';
import { EditarProyectoComponent } from './componente/editar-proyecto/editar-proyecto.component';
import { EditarChipComponent } from './componente/editar-chip/editar-chip.component';
import { AdministradorComponent } from './componente/administrador/administrador.component';
import { AlertaComponent } from './componente/alerta/alerta.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    AcercaDeComponent,
    StackComponent,
    ProyectosComponent,
    SkillsComponent,
    LoginComponent,
    EditarAcercaDeComponent,
    EditarStackComponent,
    EditarSkillsComponent,
    EditarProyectoComponent,
    EditarChipComponent,
    AdministradorComponent,
    AlertaComponent
  ],
  imports: [
    GaugeModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
