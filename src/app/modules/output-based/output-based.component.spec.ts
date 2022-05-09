import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBasedComponent } from './output-based.component';

describe('OutputBasedComponent', () => {
  let component: OutputBasedComponent;
  let fixture: ComponentFixture<OutputBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
