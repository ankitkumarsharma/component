import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkFormComponent } from './ak-form.component';

describe('AkFormComponent', () => {
  let component: AkFormComponent;
  let fixture: ComponentFixture<AkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
