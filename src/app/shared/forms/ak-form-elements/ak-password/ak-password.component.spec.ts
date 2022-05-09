import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkPasswordComponent } from './ak-password.component';

describe('AkPasswordComponent', () => {
  let component: AkPasswordComponent;
  let fixture: ComponentFixture<AkPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
