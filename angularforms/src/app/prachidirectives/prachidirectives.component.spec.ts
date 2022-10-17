import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachidirectivesComponent } from './prachidirectives.component';

describe('PrachidirectivesComponent', () => {
  let component: PrachidirectivesComponent;
  let fixture: ComponentFixture<PrachidirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachidirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachidirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
