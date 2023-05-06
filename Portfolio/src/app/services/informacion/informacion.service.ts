import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacion } from 'src/app/model/Informacion';
import { Imagen } from 'src/app/model/Imagen';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(private http: HttpClient) { }

  update(informacion: Informacion): Observable<Informacion> {
    return this.http.put<Informacion>('http://localhost:8080/informacion/update', informacion);
  }

  updateImg(formData: FormData, type: string): Observable<Imagen> {
    return this.http.post<Imagen>(`http://localhost:8080/imagen/upload/informacion/${type}`, formData);
  }
}
