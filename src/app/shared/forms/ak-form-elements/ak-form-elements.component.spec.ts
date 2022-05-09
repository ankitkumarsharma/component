import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkFormElementsComponent } from './ak-form-elements.component';

describe('AkFormElementsComponent', () => {
  let component: AkFormElementsComponent;
  let fixture: ComponentFixture<AkFormElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkFormElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkFormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
