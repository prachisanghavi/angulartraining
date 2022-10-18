import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachiparentComponent } from './prachiparent.component';

describe('PrachiparentComponent', () => {
  let component: PrachiparentComponent;
  let fixture: ComponentFixture<PrachiparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachiparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachiparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
