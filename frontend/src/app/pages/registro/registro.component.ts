import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import paises from '../../paises.json';

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
    private router: Router
  ) { }
  ngOnInit(): void { 

  }

  registrarUsuario(): void {
    // validar datos en back-end
    console.log (this.registerForm);
    this.router.navigate(['/inicio'])
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




