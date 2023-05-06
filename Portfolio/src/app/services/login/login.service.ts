import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { urlRailway } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  tokenExists = new BehaviorSubject<boolean>(this.tokenValido());

  constructor(
    private http: HttpClient,
  ) { }

  logIn(username: string, password: string) {
    this.http.post(
      urlRailway + 'login', 
      {"username": username,"password": password},
      {observe: 'response'}
    ).subscribe((res) => this.setToken(res.headers.get('Authorization') || ""));
  }

  logOut(): void {
    localStorage.removeItem("token");
    this.tokenExists.next(false);
  }

  usuarioAutenticado(): BehaviorSubject<boolean> {
    return this.tokenExists;
  }

  setToken(token: string): void {
    if (token != "") {
      localStorage.setItem('token', token);
      this.tokenExists.next(true);
    }
    else {
      this.tokenExists.next(false);
    }
  }

  tokenValido(): boolean {
    let token = localStorage.getItem("token");
    if (token != null && token != "") {
      return true;
    }
    return false;
  }
}
