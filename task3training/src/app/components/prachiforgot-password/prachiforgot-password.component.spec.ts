import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachiforgotPasswordComponent } from './prachiforgot-password.component';

describe('PrachiforgotPasswordComponent', () => {
  let component: PrachiforgotPasswordComponent;
  let fixture: ComponentFixture<PrachiforgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachiforgotPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachiforgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
