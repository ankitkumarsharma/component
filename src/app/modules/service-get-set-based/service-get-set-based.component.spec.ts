import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGetSetBasedComponent } from './service-get-set-based.component';

describe('ServiceGetSetBasedComponent', () => {
  let component: ServiceGetSetBasedComponent;
  let fixture: ComponentFixture<ServiceGetSetBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceGetSetBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceGetSetBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
