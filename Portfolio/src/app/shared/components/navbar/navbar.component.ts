import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input() linkedInURL: string;

  ref: DynamicDialogRef;

  modoEdicion: boolean = false;

  constructor(
    private _login: LoginService,
    public _dialog: DialogService
  ) { }

  ngOnInit(): void {
    this._login.usuarioAutenticado().subscribe(v => this.modoEdicion = v);
  }

  login(): void {
    this.ref = this._dialog.open(LoginDialogComponent, {
      header: 'Ingresar clave'
    });
  }

  logout(): void {
    this._login.logOut();
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }
}
