import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachicontactComponent } from './prachicontact.component';

describe('PrachicontactComponent', () => {
  let component: PrachicontactComponent;
  let fixture: ComponentFixture<PrachicontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachicontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachicontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
