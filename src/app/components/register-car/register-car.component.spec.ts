import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCarComponent } from './register-car.component';

describe('RegisterCarComponent', () => {
  let component: RegisterCarComponent;
  let fixture: ComponentFixture<RegisterCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCarComponent]
    });
    fixture = TestBed.createComponent(RegisterCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
