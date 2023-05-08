import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/model/Skill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  save(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(environment.backendURL + 'skill/save', skill);
  }

  deleteById(idSkill: number) {
    return this.http.delete(environment.backendURL + `skill/delete?id=${idSkill}`);
  }
}
