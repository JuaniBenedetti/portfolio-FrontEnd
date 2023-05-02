import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.sass']
})
export class ProyectoComponent implements OnInit {

  @Input() proyectos: Proyecto[];

  constructor() { }

  ngOnInit(): void {
  }

}
