import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuario'; 

  constructor(private http: HttpClient) { }

  login(usuario: string, contraseña: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { usuario, contraseña });
  }

 
}
