import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachiheaderComponent } from './prachiheader.component';

describe('PrachiheaderComponent', () => {
  let component: PrachiheaderComponent;
  let fixture: ComponentFixture<PrachiheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachiheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachiheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
