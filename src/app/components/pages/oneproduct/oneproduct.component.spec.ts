import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneproductComponent } from './oneproduct.component';

describe('OneproductComponent', () => {
  let component: OneproductComponent;
  let fixture: ComponentFixture<OneproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
