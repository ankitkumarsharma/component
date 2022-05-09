import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkBodyComponent } from './ak-body.component';

describe('AkBodyComponent', () => {
  let component: AkBodyComponent;
  let fixture: ComponentFixture<AkBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
