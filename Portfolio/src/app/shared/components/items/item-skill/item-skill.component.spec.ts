import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSkillComponent } from './item-skill.component';

describe('ItemSkillComponent', () => {
  let component: ItemSkillComponent;
  let fixture: ComponentFixture<ItemSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
