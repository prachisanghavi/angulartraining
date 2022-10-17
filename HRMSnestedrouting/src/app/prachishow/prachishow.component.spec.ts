import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachishowComponent } from './prachishow.component';

describe('PrachishowComponent', () => {
  let component: PrachishowComponent;
  let fixture: ComponentFixture<PrachishowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachishowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachishowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
