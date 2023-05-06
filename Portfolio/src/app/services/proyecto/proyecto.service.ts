import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlRailway } from 'src/app/global';
import { Proyecto } from 'src/app/model/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }

  save(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(urlRailway + 'proyecto/save', proyecto);
  }
  
  update(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(urlRailway + 'proyecto/update', proyecto);
  }

  deleteById(idProyecto: number) {
    return this.http.delete(urlRailway + `proyecto/delete?id=${idProyecto}`);
  }
}
