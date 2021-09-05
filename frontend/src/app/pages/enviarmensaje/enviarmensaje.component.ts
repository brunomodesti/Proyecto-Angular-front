import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/services/mensaje.service';
import { UsuarioService } from '../../services/usuario.service';


@Component({
    selector: 'app-enviarmensaje',
    templateUrl: './enviarmensaje.component.html',
    styleUrls: ['./enviarmensaje.component.scss']
})

export class EnviarmensajeComponent implements OnInit {

    usuarios: any = [];
    usuarioElegido: string = "";
    mensajeFormControl: FormControl = new FormControl ("");


    constructor(
        private usuarioService: UsuarioService,
        private router: Router,
        private mensajeService: MensajeService,
    ) { }

    ngOnInit(): void {
        this.usuarioService.buscarUsuarios().subscribe(
            response => {
                response.forEach((usuarioResponse) => {
                    this.usuarios.push(usuarioResponse.usuario);
                })
            }
        )
    }

    enviarMensaje(): void {
        var data = {
            cuerpo: this.mensajeFormControl.value,
            remitente_usuario: localStorage.getItem ("farmbookUsuario"),
            destinatario_usuario: this.usuarioElegido
        }
        this.mensajeService.enviarMensaje(data).subscribe(
            response => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        )

    }

}
