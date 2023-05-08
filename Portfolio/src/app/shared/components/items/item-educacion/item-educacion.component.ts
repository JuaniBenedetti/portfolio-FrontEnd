import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/services/educacion/educacion.service';
import { EducacionDialogComponent } from '../../dialogs/educacion-dialog/educacion-dialog.component';

@Component({
  selector: 'app-item-educacion',
  templateUrl: './item-educacion.component.html',
  styleUrls: ['./item-educacion.component.sass']
})
export class ItemEducacionComponent implements OnInit {

  @Input() educacion: Educacion;
  @Input() modoEdicion: boolean = false;

  @Output() emitUpdateList = new EventEmitter<Educacion>();

  logoInstitucion: SafeUrl;

  ref: DynamicDialogRef;

  constructor(
    private _educacion: EducacionService,
    private _dialog: DialogService,
    private _confirmation: ConfirmationService,
    private _message: MessageService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.loadLogo();
  }

  loadLogo(): void {
    if(this.educacion.imgLogoInstitucion?.img) {
      let objectURL = 'data:image/png;base64,' + this.educacion.imgLogoInstitucion.img;
      this.logoInstitucion = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    } else { this.logoInstitucion = "assets\\images\\educacionNotFound.png"; }
  }

  edit(): void {
    this.formateDate(this.educacion);
    this.ref = this._dialog.open(EducacionDialogComponent, {
      header: 'Editar educación',
      data: this.educacion
    });

    this.ref.onClose.subscribe((edu: {'educacion': Educacion, 'imgFile': File}) => {
      if(edu) {
        this._educacion.update({ ...this.educacion, ...edu.educacion }).subscribe(eduBack => {
          this.educacion = eduBack; 
          edu.imgFile ? this.uploadImg(eduBack, edu.imgFile) : null;
        });
      }
    });
  }

  delete(): void {
    this._confirmation.confirm({
      message: '¿Seguro que desea eliminar la educacion?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._educacion.deleteById(this.educacion.idEducacion).subscribe(r => {
          this.emitUpdateList.emit(this.educacion);
          this._message.add({  key: 'bc', severity: 'success', summary: 'Éxito', detail: 'Experiencia eliminada correctamente' });
        });
      }
    });
  }

  uploadImg(educacion: Educacion, file: File): void {
    const formData = new FormData();
    formData.append('img', file);
    formData.append('idEducacion', educacion.idEducacion.toString())
    this._educacion.updateImg(formData).subscribe(img => {
      this.educacion.imgLogoInstitucion = img;
      this.loadLogo();
    });
  }

  formateDate(edu: Educacion): void {
    edu.fechaInicio ? edu.fechaInicio = new Date(edu.fechaInicio) : null;
    edu.fechaFin ? edu.fechaFin = new Date(edu.fechaFin) : null;
  }
}
