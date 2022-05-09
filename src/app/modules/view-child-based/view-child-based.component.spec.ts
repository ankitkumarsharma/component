import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildBasedComponent } from './view-child-based.component';

describe('ViewChildBasedComponent', () => {
  let component: ViewChildBasedComponent;
  let fixture: ComponentFixture<ViewChildBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
