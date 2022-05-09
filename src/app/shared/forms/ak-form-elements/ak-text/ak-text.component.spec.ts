import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkTextComponent } from './ak-text.component';

describe('AkTextComponent', () => {
  let component: AkTextComponent;
  let fixture: ComponentFixture<AkTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
