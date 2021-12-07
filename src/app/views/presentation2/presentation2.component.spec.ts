import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Presentation2Component } from './presentation2.component';

describe('Presentation2Component', () => {
  let component: Presentation2Component;
  let fixture: ComponentFixture<Presentation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Presentation2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Presentation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
