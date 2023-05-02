import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/model/Skill';

@Component({
  selector: 'app-item-skill',
  templateUrl: './item-skill.component.html',
  styleUrls: ['./item-skill.component.sass']
})
export class ItemSkillComponent implements OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit(): void {
    console.log(this.skill);
  }

}
