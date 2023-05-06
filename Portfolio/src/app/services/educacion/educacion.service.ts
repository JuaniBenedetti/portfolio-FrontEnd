import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlRailway } from 'src/app/global';
import { Educacion } from 'src/app/model/Educacion';
import { Imagen } from 'src/app/model/Imagen';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  save(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(urlRailway + 'educacion/save', educacion);
  }

  update(educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(urlRailway + 'educacion/update', educacion);
  }

  updateImg(formData: FormData): Observable<Imagen> {
    return this.http.post<Imagen>(urlRailway + 'imagen/upload/educacion/logoInstitucion', formData);
  }
  
  deleteById(idEducacion: number) {
    return this.http.delete(urlRailway + `educacion/delete?id=${idEducacion}`);
  }
}
