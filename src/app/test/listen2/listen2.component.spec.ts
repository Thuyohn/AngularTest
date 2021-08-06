import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listen2Component } from './listen2.component';

describe('Listen2Component', () => {
  let component: Listen2Component;
  let fixture: ComponentFixture<Listen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Listen2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Listen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
