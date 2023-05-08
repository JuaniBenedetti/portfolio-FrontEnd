import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/model/Educacion';
import { Imagen } from 'src/app/model/Imagen';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  save(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(environment.backendURL + 'educacion/save', educacion);
  }

  update(educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(environment.backendURL + 'educacion/update', educacion);
  }

  updateImg(formData: FormData): Observable<Imagen> {
    return this.http.post<Imagen>(environment.backendURL + 'imagen/upload/educacion/logoInstitucion', formData);
  }
  
  deleteById(idEducacion: number) {
    return this.http.delete(environment.backendURL + `educacion/delete?id=${idEducacion}`);
  }
}
