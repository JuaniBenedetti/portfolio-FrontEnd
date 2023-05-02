import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Experiencia } from 'src/app/model/Experiencia';

@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.sass']
})
export class ItemExperienciaComponent implements OnInit {

  @Input() experiencia: Experiencia;

  logoEmpresa: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadLogo();
  }

  loadLogo(): void {
    if(this.experiencia.logoEmpresa) {
      let objectURL = 'data:image/png;base64,' + this.experiencia.logoEmpresa;
      this.logoEmpresa = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    } else { this.logoEmpresa = "assets\\images\\ProfileNotFound.png"; }
  }
}
