import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Informacion } from 'src/app/model/Informacion';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  usuario: Usuario;
  linkedInURL = "";

  constructor(
    private _usuario: UsuarioService,
    private location: Location,
    private router: Router
  ) { }
  
  ngOnInit() {
    // Busco el usuario de la URL o, si no existe, admin que es el mio
    const path = this.location.path();
    const username = path.split('/').pop() || "admin";
    this._usuario.findByUsername(username).subscribe((u) => {
      if(u) {
        this.usuario = u;
        u.informacion ? null : u.informacion = new Informacion();
        this.linkedInURL = this.usuario.informacion.linkedInURL;
      } else {
        this.router.navigate(['notFound'])
      }
    });
  }

  updateLinkedInURL(newLinkedInURL: string) {
    this.linkedInURL = newLinkedInURL;
  }
}
