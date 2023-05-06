import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDialogComponent } from './informacion-dialog.component';

describe('InformacionDialogComponent', () => {
  let component: InformacionDialogComponent;
  let fixture: ComponentFixture<InformacionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
