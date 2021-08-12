import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-enviarmensaje',
    templateUrl: './enviarmensaje.component.html',
    styleUrls: ['./enviarmensaje.component.scss']
})

export class EnviarmensajeComponent implements OnInit {
    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {}

    irARegistro(): void {
        this.router.navigate(['/registro'])
    }
    irAMensaje(): void {
        this.router.navigate(['/mensajes'])
    }

}
