import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
    username = new FormControl();
    password = new FormControl('');
  constructor(
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

}
