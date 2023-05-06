import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDialogComponent } from './proyecto-dialog.component';

describe('ProyectoDialogComponent', () => {
  let component: ProyectoDialogComponent;
  let fixture: ComponentFixture<ProyectoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
