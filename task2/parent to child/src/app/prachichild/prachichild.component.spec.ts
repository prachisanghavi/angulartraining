import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachichildComponent } from './prachichild.component';

describe('PrachichildComponent', () => {
  let component: PrachichildComponent;
  let fixture: ComponentFixture<PrachichildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachichildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachichildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
