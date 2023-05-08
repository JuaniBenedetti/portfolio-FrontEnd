import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/model/Proyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }

  save(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(environment.backendURL + 'proyecto/save', proyecto);
  }
  
  update(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(environment.backendURL + 'proyecto/update', proyecto);
  }

  deleteById(idProyecto: number) {
    return this.http.delete(environment.backendURL + `proyecto/delete?id=${idProyecto}`);
  }
}
