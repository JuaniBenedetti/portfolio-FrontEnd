import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-educacion-dialog',
  templateUrl: './educacion-dialog.component.html',
  styleUrls: ['./educacion-dialog.component.sass']
})
export class EducacionDialogComponent implements OnInit {

  educacion: FormGroup;

  fechaHoy = new Date();
  imgFile: File | null;

  constructor(
    private _formBuilder: FormBuilder,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
    this.educacion = this._formBuilder.group({
      nombreInstitucion: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fechaInicio: [null, [Validators.required]],
      fechaFin: [null],
      descripcion: ['']
    })

    this.educacion.patchValue(this.config.data);

  }

  selectedImage(event: Event): void {
    const imgInput = event.target as HTMLInputElement;
    const file: File | undefined = imgInput.files?.[0];
    if(file) {
      this.imgFile = file;
    }
  }

  eliminarArchivo() {
    this.imgFile = null;
  }

  guardar(): void {
    this.ref.close( {'educacion': this.educacion.value, 'imgFile': this.imgFile} );
  }

  volver(): void {
    this.ref.close();
  }
}
