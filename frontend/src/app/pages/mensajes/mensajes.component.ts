import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/services/mensaje.service';

export interface MensajeElement {
  usuario: string;
  fecha: Date;
  mensaje: string;
}

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'fecha', 'mensaje'];
  mensajes = new MatTableDataSource<MensajeElement>();

  constructor(
    private router: Router,
    private mensajeService: MensajeService,
    private changeDetectorRefs: ChangeDetectorRef,
    ) {}


  cargarMensajesEnviados(): void {
    this.mensajeService.getMensajesEnviados(localStorage.getItem('farmbookUsuario')).subscribe(
      response => {
        var mensajesTabla: MensajeElement[] = [];
        response.forEach((mensajeEnviado) => {
          var msj = {
            usuario: mensajeEnviado.destinatario_usuario,
            fecha: mensajeEnviado.createdAt,
            mensaje: mensajeEnviado.cuerpo
          };
          mensajesTabla.push(msj);
      });
      this.mensajes.data = mensajesTabla;
      },
      error => {
        console.log(error);
      }
    )

  }

  cargarMensajesRecibidos(): void {
    this.mensajeService.getMensajesRecibidos(localStorage.getItem('farmbookUsuario')).subscribe(
      response => {
        var mensajesTabla: MensajeElement[] = [];
        response.forEach((mensajeRecibido) => {
          var msj = {
            usuario: mensajeRecibido.remitente_usuario,
            fecha: mensajeRecibido.createdAt,
            mensaje: mensajeRecibido.cuerpo
          };
          mensajesTabla.push(msj);
      });
      this.mensajes.data = mensajesTabla;
      },
      error => {
        console.log(error);
      }
    )

  }

  ngOnInit(): void {
    this.cargarMensajesEnviados();
  }

  irAMensajeNuevo(): void {
    this.router.navigate(['/enviarmensaje'])
  }

  cerrarSesion(): void {
    localStorage.removeItem("farmbookUsuario");
    this.router.navigate(["/inicio"])
  }
}


