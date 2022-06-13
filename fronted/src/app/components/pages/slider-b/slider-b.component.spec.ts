import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBComponent } from './slider-b.component';

describe('SliderBComponent', () => {
  let component: SliderBComponent;
  let fixture: ComponentFixture<SliderBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
