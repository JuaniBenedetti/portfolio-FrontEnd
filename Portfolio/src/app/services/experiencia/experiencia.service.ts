import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/Experiencia';
import { Imagen } from 'src/app/model/Imagen';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  save(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>('http://localhost:8080/experiencia/save', experiencia);
  }
  
  update(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>('http://localhost:8080/experiencia/update', experiencia);
  }

  updateImg(formData: FormData): Observable<Imagen> {
    return this.http.post<Imagen>('http://localhost:8080/imagen/upload/experiencia/logoEmpresa', formData);
  }

  deleteById(idExperiencia: number) {
    return this.http.delete(`http://localhost:8080/experiencia/delete?id=${idExperiencia}`);
  }
}
