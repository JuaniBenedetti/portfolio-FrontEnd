import { Component, OnInit, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Proyecto } from 'src/app/model/Proyecto';
import { LoginService } from 'src/app/services/login/login.service';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
import { ProyectoDialogComponent } from '../dialogs/proyecto-dialog/proyecto-dialog.component';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.sass']
})
export class ProyectoComponent implements OnInit {

  @Input() proyectos: Proyecto[];

  modoEdicion: boolean = false;

  ref: DynamicDialogRef;

  constructor(
    private _login: LoginService,
    private _proyecto: ProyectoService,
    private _dialog: DialogService
  ) { }

  ngOnInit(): void {
    this._login.usuarioAutenticado().subscribe(v => this.modoEdicion = v);
  }

  newProyecto(): void {
    this.ref = this._dialog.open(ProyectoDialogComponent, {
      header: 'Nuevo proyecto',
    });

    this.ref.onClose.subscribe((pro: Proyecto) => {
      if(pro) {
        this._proyecto.save(pro).subscribe(proBack => {
          this.proyectos.push(proBack);
        });
      }
    });
  }

  updateList(proyectoEliminado: Proyecto): void {
    this.proyectos.splice(this.proyectos.indexOf(proyectoEliminado), 1);
  }
}
