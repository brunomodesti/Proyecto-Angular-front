import { Component, OnInit } from '@angular/core';

export interface MensajeElement {
  destinatario: string;
  fecha: Date;
  mensaje: string;
}

const MENSAJES_DATA: MensajeElement[] = [
  {destinatario: 'Hydrogen', fecha: new Date(2021, 6, 15), mensaje: 'H'},
  {destinatario: 'Helium', fecha: new Date(2021, 6, 16), mensaje: 'He'},
  {destinatario: 'Lithium', fecha: new Date(2021, 6, 19), mensaje: 'Li'}
];

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {
  displayedColumns: string[] = ['destinatario', 'fecha', 'mensaje'];
  dataSource = MENSAJES_DATA;
  constructor() {}

  ngOnInit(): void {}

}
