import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Proyecto } from 'src/app/model/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
import { ProyectoDialogComponent } from '../../dialogs/proyecto-dialog/proyecto-dialog.component';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.sass']
})
export class ItemProyectoComponent implements OnInit {

  @Input() proyecto: Proyecto;
  @Input() modoEdicion: boolean = false;

  @Output() emitUpdateList = new EventEmitter<Proyecto>();

  ref: DynamicDialogRef;

  constructor(
    private _proyecto: ProyectoService,
    private _dialog: DialogService,
    private _confirmation: ConfirmationService,
    private _message: MessageService,
  ) { }

  ngOnInit(): void {
  }

  edit(): void {
    this.formateDate(this.proyecto);
    this.ref = this._dialog.open(ProyectoDialogComponent, {
      header: 'Nuevo proyecto',
      data: this.proyecto
    });

    this.ref.onClose.subscribe((pro: Proyecto) => {
      this._proyecto.update({ ...this.proyecto, ...pro }).subscribe(proBack => 
        this.proyecto = proBack
      );
    });
  }

  delete(): void {
    this._confirmation.confirm({
      message: '¿Seguro que desea eliminar el proyecto?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._proyecto.deleteById(this.proyecto.idProyecto).subscribe(r => {
          this.emitUpdateList.emit(this.proyecto);
          this._message.add({  key: 'bc', severity: 'success', summary: 'Éxito', detail: 'Proyecto eliminado correctamente' });
        });
      }
    });
  }

  formateDate(pro: Proyecto): void {
    pro.fecha ? pro.fecha = new Date(pro.fecha) : null;
  }
}
