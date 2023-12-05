import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveTravelreqComponent } from './approve-travelreq.component';

describe('ApproveTravelreqComponent', () => {
  let component: ApproveTravelreqComponent;
  let fixture: ComponentFixture<ApproveTravelreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveTravelreqComponent]
    });
    fixture = TestBed.createComponent(ApproveTravelreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
