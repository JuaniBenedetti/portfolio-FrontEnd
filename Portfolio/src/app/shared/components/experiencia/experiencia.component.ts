import { Component, OnInit, Input } from '@angular/core';
import { Experiencia } from 'src/app/model/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.sass']
})
export class ExperienciaComponent implements OnInit {

  @Input() experiencias: Experiencia[];

  constructor() { }

  ngOnInit(): void {
  }

}
