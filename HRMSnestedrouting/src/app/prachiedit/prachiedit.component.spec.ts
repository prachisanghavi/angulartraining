import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachieditComponent } from './prachiedit.component';

describe('PrachieditComponent', () => {
  let component: PrachieditComponent;
  let fixture: ComponentFixture<PrachieditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachieditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachieditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
