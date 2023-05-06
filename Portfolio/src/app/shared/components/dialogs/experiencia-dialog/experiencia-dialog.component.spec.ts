import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaDialogComponent } from './experiencia-dialog.component';

describe('ExperienciaDialogComponent', () => {
  let component: ExperienciaDialogComponent;
  let fixture: ComponentFixture<ExperienciaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
