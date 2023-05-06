import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia/experiencia.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ExperienciaDialogComponent } from '../dialogs/experiencia-dialog/experiencia-dialog.component';
import { ItemExperienciaComponent } from '../items/item-experiencia/item-experiencia.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.sass']
})
export class ExperienciaComponent implements OnInit {

  @ViewChildren('id') itemExperiencias: ItemExperienciaComponent[];

  @Input() experiencias: Experiencia[];

  modoEdicion: boolean = false;

  ref: DynamicDialogRef;

  constructor(
    private _login: LoginService,
    private _experiencia: ExperienciaService,
    private _dialog: DialogService,
    private _confirmation: ConfirmationService,
    private _message: MessageService
  ) { }

  ngOnInit(): void {
    this._login.usuarioAutenticado().subscribe(v => this.modoEdicion = v);
  }

  editExperiencia(experiencia?: Experiencia): void {
    experiencia ? this.formatDate(experiencia) : null;
    this.ref = this._dialog.open(ExperienciaDialogComponent, {
      header: experiencia ? 'Editar experiencia' : 'Nueva experiencia',
      data: experiencia
    });

    this.ref.onClose.subscribe((xp: {'experiencia': Experiencia, 'imgFile': File}) => {
      if(xp) {
        if(experiencia) {
          let index = this.experiencias.indexOf(experiencia);
          this._experiencia.update({ ...experiencia, ...xp.experiencia }).subscribe(xpBack => {
            xp.imgFile ? this.uploadImg(xp.imgFile, xpBack, index) : this.actualizarExperiencias(index, xpBack);
          })
        } 
        else {
          this._experiencia.save(xp.experiencia).subscribe(xpBack => {
            xp.imgFile ? this.uploadImg(xp.imgFile, xpBack) : this.experiencias.push(xpBack);
          });
        }
      }
    })
  }

  deleteExperiencia(experiencia: Experiencia): void {
    this._confirmation.confirm({
      message: '¿Seguro que desea eliminar la experiencia?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._experiencia.deleteById(experiencia.idExperiencia).subscribe(r => {
          this.experiencias.splice(this.experiencias.indexOf(experiencia), 1);
          this._message.add({  key: 'bc', severity: 'success', summary: 'Éxito', detail: 'Experiencia eliminada correctamente' });
        });
      }
    });
  }

  uploadImg(file: File, experiencia: Experiencia, index?: number) {
    const formData = new FormData();
    formData.append('img', file);
    formData.append('idExperiencia', experiencia.idExperiencia.toString())
    this._experiencia.updateImg(formData).subscribe(img => {
      experiencia.imgLogoEmpresa = img;
      if(index != undefined) {
        this.actualizarExperiencias(index, experiencia);
      } else { this.experiencias.push(experiencia); }         
    });
  }

  actualizarExperiencias(index: number, experiencia: Experiencia) {
    this.experiencias[index] = experiencia;
    this.itemExperiencias.forEach(item => {
      item.experiencia.idExperiencia == index ? item.experiencia = experiencia : null;
    });
  }

  private formatDate(xp: Experiencia): void {
    xp.fechaInicio ? xp.fechaInicio = new Date(xp.fechaInicio) : null;
    xp.fechaFin ? xp.fechaFin = new Date(xp.fechaFin) : null;
  }
}
