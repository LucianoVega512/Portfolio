import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GaugeModule } from 'angular-gauge';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componente/cabecera/cabecera.component';
import { AcercaDeComponent } from './componente/acerca-de/acerca-de.component';
import { StackComponent } from './componente/stack/stack.component';
import { ProyectosComponent } from './componente/proyectos/proyectos.component';
import { SkillsComponent } from './componente/skills/skills.component';
import { LoginComponent } from './componente/login/login.component';
import { EditarAcercaDeComponent } from './componente/editar-acerca-de/editar-acerca-de.component';
import { EditarStackComponent } from './componente/editar-stack/editar-stack.component';

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
    EditarStackComponent
  ],
  imports: [
    GaugeModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
