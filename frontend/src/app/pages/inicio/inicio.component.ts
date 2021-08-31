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
    var data = {
      username: this.username.value,
      password: this.password.value
    }
    this.usuarioService.post(data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

}
