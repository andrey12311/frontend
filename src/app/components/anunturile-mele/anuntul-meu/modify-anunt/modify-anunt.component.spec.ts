import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAnuntComponent } from './modify-anunt.component';

describe('ModifyAnuntComponent', () => {
  let component: ModifyAnuntComponent;
  let fixture: ComponentFixture<ModifyAnuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAnuntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAnuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
