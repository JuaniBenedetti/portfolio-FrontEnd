import { Component, OnInit, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/services/educacion/educacion.service';
import { LoginService } from 'src/app/services/login/login.service';
import { EducacionDialogComponent } from '../dialogs/educacion-dialog/educacion-dialog.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.sass']
})
export class EducacionComponent implements OnInit {

  @Input() educacion: Educacion[];

  modoEdicion: boolean = false;

  ref: DynamicDialogRef;

  constructor(
    private _login: LoginService,
    private _educacion: EducacionService,
    private _dialog: DialogService
  ) { }

  ngOnInit(): void {
    this._login.usuarioAutenticado().subscribe(v => this.modoEdicion = v);
  }

  newEducacion(): void {
    this.ref = this._dialog.open(EducacionDialogComponent, {
      header: 'Nueva educación',
    });

    this.ref.onClose.subscribe((edu: {'educacion': Educacion, 'imgFile': File}) => {
      this._educacion.save(edu.educacion).subscribe(eduBack => {
        if(edu.imgFile) {
          this.uploadImg(eduBack , edu.imgFile);
        }
        else {
          this.educacion.push(eduBack);
        }
      });
    });
  }

  uploadImg(educacion: Educacion, file: File): void {
    const formData = new FormData();
    formData.append('img', file);
    formData.append('idEducacion', educacion.idEducacion.toString())
    this._educacion.updateImg(formData).subscribe(img => {
      educacion.imgLogoInstitucion = img;
      this.educacion.push(educacion);
    });
  }

  updateList(educacionEliminada: Educacion): void {
    this.educacion.splice(this.educacion.indexOf(educacionEliminada), 1);
  }
}
