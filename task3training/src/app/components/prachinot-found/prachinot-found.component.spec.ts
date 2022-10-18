import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachinotFoundComponent } from './prachinot-found.component';

describe('PrachinotFoundComponent', () => {
  let component: PrachinotFoundComponent;
  let fixture: ComponentFixture<PrachinotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachinotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachinotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
