import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkErrorComponent } from './ak-error.component';

describe('AkErrorComponent', () => {
  let component: AkErrorComponent;
  let fixture: ComponentFixture<AkErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
