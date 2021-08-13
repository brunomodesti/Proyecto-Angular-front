import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
    username = new FormControl();
    password = new FormControl('');
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  irARegistro(): void {
    this.router.navigate(['/registro'])
  }

  irAMensaje(): void {
    this.router.navigate(['/mensajes'])
  }

  iniciarSesion(): void {
    this.usuarioService.get().subscribe(
      response => {
        console.log(response.message);
      },
      error => {
        console.log(error);
      }
    )
  }

}
