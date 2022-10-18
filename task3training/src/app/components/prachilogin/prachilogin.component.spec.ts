import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachiloginComponent } from './prachilogin.component';

describe('PrachiloginComponent', () => {
  let component: PrachiloginComponent;
  let fixture: ComponentFixture<PrachiloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachiloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachiloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
