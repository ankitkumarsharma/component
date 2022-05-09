import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBasedComponent } from './input-based.component';

describe('InputBasedComponent', () => {
  let component: InputBasedComponent;
  let fixture: ComponentFixture<InputBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
