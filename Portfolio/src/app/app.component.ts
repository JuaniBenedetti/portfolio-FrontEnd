import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  @HostListener('window:beforeunload')
  logOut() {
    localStorage.removeItem("token");
  }
}
