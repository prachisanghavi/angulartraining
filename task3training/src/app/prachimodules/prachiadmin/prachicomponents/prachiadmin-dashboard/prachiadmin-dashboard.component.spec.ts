import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachiadminDashboardComponent } from './prachiadmin-dashboard.component';

describe('PrachiadminDashboardComponent', () => {
  let component: PrachiadminDashboardComponent;
  let fixture: ComponentFixture<PrachiadminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrachiadminDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachiadminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
