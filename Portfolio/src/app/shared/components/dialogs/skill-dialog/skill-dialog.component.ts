import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: ['./skill-dialog.component.sass']
})
export class SkillDialogComponent implements OnInit {

  skill: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _skill: SkillService,
    private ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
    this.skill = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
    })
  }

  guardar(): void {
    this._skill.save(this.skill.value).subscribe(skillBack =>
      this.ref.close(skillBack)
    )
  }

  volver(): void {
    this.ref.close();
  }
}
