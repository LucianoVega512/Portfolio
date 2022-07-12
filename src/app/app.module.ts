import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componente/cabecera/cabecera.component';
import { AcercaDeComponent } from './componente/acerca-de/acerca-de.component';
import { StackComponent } from './componente/stack/stack.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    AcercaDeComponent,
    StackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
