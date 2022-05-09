import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkSelectComponent } from './ak-select.component';

describe('AkSelectComponent', () => {
  let component: AkSelectComponent;
  let fixture: ComponentFixture<AkSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
