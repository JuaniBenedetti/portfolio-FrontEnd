import { Component, OnInit, Input } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.sass']
})
export class EducacionComponent implements OnInit {

  @Input() educacion: Educacion[];

  constructor() { }

  ngOnInit(): void {
  }

}
