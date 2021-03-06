import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import paises from '../../paises.json';
import { UsuarioService } from '../../services/usuario.service';


export interface Pais {
  name: string;
  cities: string[];
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})



export class RegistroComponent implements OnInit {

  registerForm = new FormGroup ({
    lastname : new FormControl(''),
    name : new FormControl(''),
    username : new FormControl(''),
    password : new FormControl(''),
    ConfirmPassword : new FormControl(''),
    locationForm : new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
    })
  });

  countries: Pais[] = paises;
  cities: any = [];
  selectedCountry: string = "";
  selectedCity: string = "";

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }
  ngOnInit(): void { 

  }

  irAInicio(): void {
    this.router.navigate(['/inicio'])
  }

  registrarUsuario(): void {
    var data = {
      nombre: this.registerForm.value.name,
      apellido: this.registerForm.value.lastname,
      usuario: this.registerForm.value.username,
      password: this.registerForm.value.password,
      pais: this.selectedCountry,
      ciudad:this.selectedCity,
    }

    this.usuarioService.register(data).subscribe(
      response => {
        if (response === true) {
          this.irAInicio();
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  changeCountry(e): void {
    console.log(this.selectedCountry);
    this.countries.forEach((country) => {
      if (country.name === this.selectedCountry) {
        this.cities = country.cities
      }
    })
  }
}




