import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.sass']
})
export class LoginDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private location: Location,
    private _login: LoginService,
    private _formBuilder: FormBuilder,
    private ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
   this.form = this._formBuilder.group({
    clave: ['', {validators: [Validators.required], updateOn: 'submit'}]
   })
  }

  ingresar(): void {
    const path = this.location.path();
    const username = path.split('/').pop();
    if(username) {
      this._login.logIn(username, this.form.value['clave']);
      this._login.usuarioAutenticado().subscribe(autenticado => 
        autenticado ? this.ref.close() : null
      ) 
    }
  }
}
