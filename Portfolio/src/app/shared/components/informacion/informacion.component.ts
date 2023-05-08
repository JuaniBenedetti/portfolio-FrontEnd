import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Informacion } from 'src/app/model/Informacion';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/login/login.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InformacionDialogComponent } from '../dialogs/informacion-dialog/informacion-dialog.component';
import { InformacionService } from 'src/app/services/informacion/informacion.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.sass']
})
export class InformacionComponent implements OnInit {

  @Input() informacion: Informacion;

  @Output() emitUpdateLinedInURL = new EventEmitter<string>();

  profileURL: SafeUrl;
  coverURL: SafeUrl;

  modoEdicion: boolean = false;

  ref: DynamicDialogRef;

  constructor(
    private sanitizer: DomSanitizer,
    private _informacion: InformacionService,
    private _login: LoginService,
    private _dialog: DialogService
  ) { }

  ngOnInit(): void {
    this._login.usuarioAutenticado().subscribe(v => this.modoEdicion = v);
    this.loadImages();
  }

  loadImages(): void {
    if(this.informacion?.imgFotoPerfil) {
      let objectURL = 'data:image/png;base64,' + this.informacion.imgFotoPerfil.img;
      this.profileURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    } else { this.profileURL = "assets\\images\\profileNotFound.png"; }
    if(this.informacion?.imgFotoPortada) {
      let objectURL = 'data:image/png;base64,' + this.informacion.imgFotoPortada.img;
      this.coverURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    } else { this.coverURL = "assets\\images\\coverNotFound.png"; }
  }

  editarInformacion(): void {
    this.ref = this._dialog.open(InformacionDialogComponent, {
      header: 'Editar información',
      data: this.informacion
    });

    // Nota: { ...this.informacion, ...info } fusiona los objetos ya que el formulario no contempla todos los atributos del objeto
    this.ref.onClose.subscribe(info => {
      if(info) {
        this._informacion.update({ ...this.informacion, ...info }).subscribe(infoBack => {
          this.informacion = infoBack
          this.emitUpdateLinedInURL.emit(this.informacion.linkedInURL);
        });
      }
    })
  }

  selectedImage(event: Event, type: string): void {
    const imgInput = event.target as HTMLInputElement;
    const file: File | undefined = imgInput.files?.[0];
    if(file) {
      const formData = new FormData();
      formData.append('img', file);
      formData.append('idInformacion', this.informacion.idInformacion.toString())
      this._informacion.updateImg(formData, type).subscribe(imagen => {
        switch (type) {
          case 'profile': this.informacion.imgFotoPerfil = imagen; break;
          case 'cover': this.informacion.imgFotoPortada = imagen;  break;
        }
        this.loadImages();
      });
    }
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }
}
