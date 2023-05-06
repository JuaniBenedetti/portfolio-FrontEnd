import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/model/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }

  save(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>('http://localhost:8080/proyecto/save', proyecto);
  }
  
  update(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>('http://localhost:8080/proyecto/update', proyecto);
  }

  deleteById(idProyecto: number) {
    return this.http.delete(`http://localhost:8080/proyecto/delete?id=${idProyecto}`);
  }
}
