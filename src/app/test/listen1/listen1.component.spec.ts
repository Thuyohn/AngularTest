import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listen1Component } from './listen1.component';

describe('Listen1Component', () => {
  let component: Listen1Component;
  let fixture: ComponentFixture<Listen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Listen1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Listen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
