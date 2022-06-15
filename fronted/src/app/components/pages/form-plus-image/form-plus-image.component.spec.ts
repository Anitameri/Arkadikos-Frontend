import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlusImageComponent } from './form-plus-image.component';

describe('FormPlusImageComponent', () => {
  let component: FormPlusImageComponent;
  let fixture: ComponentFixture<FormPlusImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPlusImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlusImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
