import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080'

@Injectable({
    providedIn: 'root'
})
export class MensajeService {

    constructor(private http: HttpClient) { }

    enviarMensaje(data: any): Observable<any> {
        return this.http.post(`${baseUrl}/api/mensaje/enviarMensaje`, data);
    }

    getMensajesEnviados(usuario: any): Observable<any> {
        return this.http.get(`${baseUrl}/api/mensaje/mensajesenviados/${usuario}`);
    }

    getMensajesRecibidos(usuario: any): Observable<any> {
        return this.http.get(`${baseUrl}/api/mensaje/mensajesrecibidos/${usuario}`);
    }
}
