import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlRailway } from 'src/app/global';
import { Usuario } from 'src/app/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  findByUsername(username: string): Observable<Usuario> {
    return this.http.get<Usuario>(urlRailway + `usuario/findByUsername?username=${username}`);
  }
}
