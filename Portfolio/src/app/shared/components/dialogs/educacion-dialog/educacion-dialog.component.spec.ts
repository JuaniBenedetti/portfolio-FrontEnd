import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionDialogComponent } from './educacion-dialog.component';

describe('EducacionDialogComponent', () => {
  let component: EducacionDialogComponent;
  let fixture: ComponentFixture<EducacionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
