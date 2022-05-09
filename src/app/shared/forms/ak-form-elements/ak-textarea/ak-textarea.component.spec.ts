import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkTextareaComponent } from './ak-textarea.component';

describe('AkTextareaComponent', () => {
  let component: AkTextareaComponent;
  let fixture: ComponentFixture<AkTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
