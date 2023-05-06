import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/model/Educacion';
import { Imagen } from 'src/app/model/Imagen';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  save(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>('http://localhost:8080/educacion/save', educacion);
  }

  update(educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>('http://localhost:8080/educacion/update', educacion);
  }

  updateImg(formData: FormData): Observable<Imagen> {
    return this.http.post<Imagen>('http://localhost:8080/imagen/upload/educacion/logoInstitucion', formData);
  }
  
  deleteById(idEducacion: number) {
    return this.http.delete(`http://localhost:8080/educacion/delete?id=${idEducacion}`);
  }
}
