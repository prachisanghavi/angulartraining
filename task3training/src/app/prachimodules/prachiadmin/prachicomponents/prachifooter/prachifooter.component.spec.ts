import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachifooterComponent } from './prachifooter.component';

describe('PrachifooterComponent', () => {
  let component: PrachifooterComponent;
  let fixture: ComponentFixture<PrachifooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachifooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachifooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
