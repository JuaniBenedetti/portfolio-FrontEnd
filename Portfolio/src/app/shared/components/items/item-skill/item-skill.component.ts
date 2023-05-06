import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/model/Skill';

@Component({
  selector: 'app-item-skill',
  templateUrl: './item-skill.component.html',
  styleUrls: ['./item-skill.component.sass']
})
export class ItemSkillComponent implements OnInit {

  @Input() skill: Skill;
  @Input() modoEdicion: boolean = false;

  @Output() emitDelete = new EventEmitter<Skill>();

  constructor( ) { }

  ngOnInit(): void {
  }
  
  deleteSkill(): void {
    this.emitDelete.emit(this.skill);
  }
}
