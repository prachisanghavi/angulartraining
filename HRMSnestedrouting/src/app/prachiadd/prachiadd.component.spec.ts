import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachiaddComponent } from './prachiadd.component';

describe('PrachiaddComponent', () => {
  let component: PrachiaddComponent;
  let fixture: ComponentFixture<PrachiaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachiaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachiaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
