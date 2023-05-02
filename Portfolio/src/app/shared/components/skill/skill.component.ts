import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/model/Skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.sass']
})
export class SkillComponent implements OnInit {

  @Input() skills: Skill[];

  constructor() { }

  ngOnInit(): void {
  }

}
