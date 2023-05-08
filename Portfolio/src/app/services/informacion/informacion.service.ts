import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacion } from 'src/app/model/Informacion';
import { Imagen } from 'src/app/model/Imagen';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(private http: HttpClient) { }

  update(informacion: Informacion): Observable<Informacion> {
    return this.http.put<Informacion>(environment.backendURL + 'informacion/update', informacion);
  }

  updateImg(formData: FormData, type: string): Observable<Imagen> {
    return this.http.post<Imagen>(environment.backendURL + `imagen/upload/informacion/${type}`, formData);
  }
}
