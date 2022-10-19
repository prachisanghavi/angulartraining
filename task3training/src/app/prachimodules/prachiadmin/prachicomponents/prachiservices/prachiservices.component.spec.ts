import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachiservicesComponent } from './prachiservices.component';

describe('PrachiservicesComponent', () => {
  let component: PrachiservicesComponent;
  let fixture: ComponentFixture<PrachiservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachiservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachiservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
