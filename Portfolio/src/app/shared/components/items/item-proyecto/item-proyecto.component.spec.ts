import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProyectoComponent } from './item-proyecto.component';

describe('ItemProyectoComponent', () => {
  let component: ItemProyectoComponent;
  let fixture: ComponentFixture<ItemProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
