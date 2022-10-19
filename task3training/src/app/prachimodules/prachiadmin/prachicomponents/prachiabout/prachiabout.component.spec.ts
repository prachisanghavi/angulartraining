import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachiaboutComponent } from './prachiabout.component';

describe('PrachiaboutComponent', () => {
  let component: PrachiaboutComponent;
  let fixture: ComponentFixture<PrachiaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachiaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachiaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
