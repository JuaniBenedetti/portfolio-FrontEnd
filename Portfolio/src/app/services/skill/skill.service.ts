import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlRailway } from 'src/app/global';
import { Skill } from 'src/app/model/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  save(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(urlRailway + 'skill/save', skill);
  }

  deleteById(idSkill: number) {
    return this.http.delete(urlRailway + `skill/delete?id=${idSkill}`);
  }
}
