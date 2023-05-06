import { Component, OnInit, Input } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Skill } from 'src/app/model/Skill';
import { LoginService } from 'src/app/services/login/login.service';
import { SkillService } from 'src/app/services/skill/skill.service';
import { SkillDialogComponent } from '../dialogs/skill-dialog/skill-dialog.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.sass']
})
export class SkillComponent implements OnInit {

  @Input() skills: Skill[];

  modoEdicion: boolean = false;

  ref: DynamicDialogRef;

  constructor(
    private _login: LoginService,
    private _skill: SkillService,
    private _dialog: DialogService,
    private _confirmation: ConfirmationService,
    private _message: MessageService
  ) { }

  ngOnInit(): void {
    this._login.usuarioAutenticado().subscribe(v => this.modoEdicion = v);
  }

  newSkill(): void {
    this.ref = this._dialog.open(SkillDialogComponent, {
      header: 'Nueva habilidad',
    });

    this.ref.onClose.subscribe(nuevaSkill => this.skills.push(nuevaSkill));
  }

  deleteSkill(skill: Skill): void {
    this._confirmation.confirm({
      message: '¿Seguro que desea eliminar la habilidad?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._skill.deleteById(skill.idSkill).subscribe(r => {
          this.skills.splice(this.skills.indexOf(skill), 1);
          this._message.add({  key: 'bc', severity: 'success', summary: 'Éxito', detail: 'Habilidad eliminada correctamente' });
        });
      }
    });
  }
}
