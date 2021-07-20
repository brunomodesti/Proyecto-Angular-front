import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  nombre = new FormControl('');
  contrasena = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
