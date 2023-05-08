import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/Usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  findByUsername(username: string): Observable<Usuario> {
    return this.http.get<Usuario>(environment.backendURL + `usuario/findByUsername?username=${username}`);
  }
}
