import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-informacion-dialog',
  templateUrl: './informacion-dialog.component.html',
  styleUrls: ['./informacion-dialog.component.sass']
})
export class InformacionDialogComponent implements OnInit {

  informacion: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
    this.informacion = this._formBuilder.group({
      apellidoNombre: ['', [Validators.required]],
      titulo: [''],
      info: [''],
      linkedInURL: ['']
    })
    
    this.informacion.patchValue(this.config.data);
  }

  guardar(): void {
    this.ref.close(this.informacion.value)
  }

  volver(): void {
    this.ref.close();
  }
}
