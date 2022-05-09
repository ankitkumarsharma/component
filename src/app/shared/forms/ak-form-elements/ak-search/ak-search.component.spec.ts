import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkSearchComponent } from './ak-search.component';

describe('AkSearchComponent', () => {
  let component: AkSearchComponent;
  let fixture: ComponentFixture<AkSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
