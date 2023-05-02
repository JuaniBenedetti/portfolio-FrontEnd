import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Educacion } from 'src/app/model/Educacion';

@Component({
  selector: 'app-item-educacion',
  templateUrl: './item-educacion.component.html',
  styleUrls: ['./item-educacion.component.sass']
})
export class ItemEducacionComponent implements OnInit {

  @Input() educacion: Educacion;

  logoInstitucion: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadLogo();
  }

  loadLogo(): void {
    if(this.educacion.logoInstitucion) {
      let objectURL = 'data:image/png;base64,' + this.educacion.logoInstitucion;
      this.logoInstitucion = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    } else { this.logoInstitucion = "assets\\images\\ProfileNotFound.png"; }
  }
}
