import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.sass']
})
export class ItemProyectoComponent implements OnInit {

  @Input() proyecto: Proyecto;

  constructor() { }

  ngOnInit(): void {
  }

}
