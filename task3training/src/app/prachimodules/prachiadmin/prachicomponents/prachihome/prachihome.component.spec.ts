import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachihomeComponent } from './prachihome.component';

describe('PrachihomeComponent', () => {
  let component: PrachihomeComponent;
  let fixture: ComponentFixture<PrachihomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachihomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
