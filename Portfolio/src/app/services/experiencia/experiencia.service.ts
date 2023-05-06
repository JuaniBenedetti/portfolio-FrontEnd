import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlRailway } from 'src/app/global';
import { Experiencia } from 'src/app/model/Experiencia';
import { Imagen } from 'src/app/model/Imagen';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  save(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(urlRailway + 'experiencia/save', experiencia);
  }
  
  update(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(urlRailway + 'experiencia/update', experiencia);
  }

  updateImg(formData: FormData): Observable<Imagen> {
    return this.http.post<Imagen>(urlRailway + 'imagen/upload/experiencia/logoEmpresa', formData);
  }

  deleteById(idExperiencia: number) {
    return this.http.delete(urlRailway + `experiencia/delete?id=${idExperiencia}`);
  }
}
