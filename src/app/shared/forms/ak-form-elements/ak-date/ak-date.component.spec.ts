import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkDateComponent } from './ak-date.component';

describe('AkDateComponent', () => {
  let component: AkDateComponent;
  let fixture: ComponentFixture<AkDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
