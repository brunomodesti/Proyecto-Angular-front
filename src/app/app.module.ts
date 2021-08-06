import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages/pages.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingsModule } from './app-routing-module';
import { ReactiveFormsModule } from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    InicioComponent,
    RegistroComponent,
    MensajesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
