import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GaugeModule } from 'angular-gauge';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componente/cabecera/cabecera.component';
import { AcercaDeComponent } from './componente/acerca-de/acerca-de.component';
import { StackComponent } from './componente/stack/stack.component';
import { ProyectosComponent } from './componente/proyectos/proyectos.component';
import { SkillsComponent } from './componente/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    AcercaDeComponent,
    StackComponent,
    ProyectosComponent,
    SkillsComponent
  ],
  imports: [
    GaugeModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
