import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnviarmensajeComponent } from './enviarmensaje/enviarmensaje.component';


@NgModule({
    declarations:
    [InicioComponent, RegistroComponent, MensajesComponent, EnviarmensajeComponent],
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
    exports: [InicioComponent, RegistroComponent, MensajesComponent, EnviarmensajeComponent],
})
export class PagesModule { };
