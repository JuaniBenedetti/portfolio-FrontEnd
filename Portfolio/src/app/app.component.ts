import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/Usuario';
import { UsuarioService } from './services/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  usuario: Usuario;
  linkedInURL = "";

  constructor(private _usuario: UsuarioService) { }

  ngOnInit() {
    // Busco siempre mi usuario pero se podria configurar para buscar uno ingresado
    let username = "admin";
    this._usuario.findByUsername(username).subscribe(u => {
      this.usuario = u
      this.linkedInURL = this.usuario.informacion.linkedInURL;
    });
  }
}
