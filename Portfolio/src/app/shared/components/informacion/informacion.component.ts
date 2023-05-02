import { Component, OnInit, Input } from '@angular/core';
import { Informacion } from 'src/app/model/Informacion';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.sass']
})
export class InformacionComponent implements OnInit {

  @Input() informacion: Informacion;

  profileURL: SafeUrl;
  coverURL: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    if(this.informacion.fotoPerfil) {
      let objectURL = 'data:image/png;base64,' + this.informacion.fotoPerfil;
      this.profileURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    } else { this.profileURL = "assets\\images\\ProfileNotFound.png"; }
    if(this.informacion.fotoPortada) {
      let objectURL = 'data:image/png;base64,' + this.informacion.fotoPortada;
      this.coverURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    } else { this.coverURL = "assets\\images\\CoverNotFound.png"; }
  }
}
