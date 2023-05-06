import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Experiencia } from 'src/app/model/Experiencia';

@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.sass']
})
export class ItemExperienciaComponent implements OnInit {

  @Input() experiencia: Experiencia;
  @Input() modoEdicion: boolean = false;

  @Output() emitDelete = new EventEmitter<Experiencia>();
  @Output() emitEdit = new EventEmitter<Experiencia>();

  logoEmpresa: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadLogo();
  }

  loadLogo(): void {
    if(this.experiencia.imgLogoEmpresa?.img) {
      let objectURL = 'data:image/png;base64,' + this.experiencia.imgLogoEmpresa.img;
      this.logoEmpresa = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    } else { this.logoEmpresa = "assets\\images\\ProfileNotFound.png"; }
  }

  edit(): void {
    this.emitEdit.emit(this.experiencia);
  }

  delete(): void {
    this.emitDelete.emit(this.experiencia);
  }
}
