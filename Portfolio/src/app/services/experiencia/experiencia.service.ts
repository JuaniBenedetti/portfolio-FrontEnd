import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/Experiencia';
import { Imagen } from 'src/app/model/Imagen';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  save(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(environment.backendURL + 'experiencia/save', experiencia);
  }
  
  update(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(environment.backendURL + 'experiencia/update', experiencia);
  }

  updateImg(formData: FormData): Observable<Imagen> {
    return this.http.post<Imagen>(environment.backendURL + 'imagen/upload/experiencia/logoEmpresa', formData);
  }

  deleteById(idExperiencia: number) {
    return this.http.delete(environment.backendURL + `experiencia/delete?id=${idExperiencia}`);
  }
}
