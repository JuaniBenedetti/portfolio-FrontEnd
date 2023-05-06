import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-proyecto-dialog',
  templateUrl: './proyecto-dialog.component.html',
  styleUrls: ['./proyecto-dialog.component.sass']
})
export class ProyectoDialogComponent implements OnInit {

  proyecto: FormGroup;

  fechaHoy = new Date();

  constructor(
    private _formBuilder: FormBuilder,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
    this.proyecto = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      fecha: [null, [Validators.required]],
      descripcion: [''],
      evidenciaURL: ['']
    })

    this.proyecto.patchValue(this.config.data);

  }

  guardar(): void {
    this.ref.close(this.proyecto.value);
  }

  volver(): void {
    this.ref.close();
  }
}
