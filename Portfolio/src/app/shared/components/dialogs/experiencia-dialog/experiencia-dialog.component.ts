import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Experiencia } from 'src/app/model/Experiencia';

@Component({
  selector: 'app-experiencia-dialog',
  templateUrl: './experiencia-dialog.component.html',
  styleUrls: ['./experiencia-dialog.component.sass']
})
export class ExperienciaDialogComponent implements OnInit {

  experiencia: FormGroup;

  fechaHoy = new Date();
  imgFile: File | null;

  constructor(
    private _formBuilder: FormBuilder,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
    this.experiencia = this._formBuilder.group({
      tituloPuesto: ['', [Validators.required]],
      fechaInicio: [null, [Validators.required]],
      fechaFin: [null],
      descripcion: ['']
    })

    this.experiencia.patchValue(this.config.data);

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
    this.ref.close({'experiencia': this.experiencia.value, 'imgFile': this.imgFile})
  }

  volver(): void {
    this.ref.close();
  }
}
