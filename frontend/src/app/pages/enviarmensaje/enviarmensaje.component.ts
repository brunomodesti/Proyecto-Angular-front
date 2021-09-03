import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';


@Component({
    selector: 'app-enviarmensaje',
    templateUrl: './enviarmensaje.component.html',
    styleUrls: ['./enviarmensaje.component.scss']
})

export class EnviarmensajeComponent implements OnInit {

    usuarios: any = [];
    usuarioElegido: string = "";


    constructor(
        private usuarioService: UsuarioService,
        private router: Router
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

}
