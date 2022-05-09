import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkTitleComponent } from './ak-title.component';

describe('AkTitleComponent', () => {
  let component: AkTitleComponent;
  let fixture: ComponentFixture<AkTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
