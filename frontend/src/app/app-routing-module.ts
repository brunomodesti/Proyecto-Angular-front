import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { RegistroComponent } from './pages/registro/registro.component';
// import {MatToolbarModule} from '@angular/material/toolbar';

const routes: Routes = [
    { path: '', redirectTo:'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'mensajes', component: MensajesComponent },
    { path: 'registro', component:RegistroComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingsModule { }  


