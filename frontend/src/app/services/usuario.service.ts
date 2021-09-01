import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(`${baseUrl}/`);
  }

  
  post(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/login`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/usuario/registrar`, data);
  }
}
