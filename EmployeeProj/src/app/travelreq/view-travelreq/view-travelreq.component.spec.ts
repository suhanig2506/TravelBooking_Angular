import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTravelreqComponent } from './view-travelreq.component';

describe('ViewTravelreqComponent', () => {
  let component: ViewTravelreqComponent;
  let fixture: ComponentFixture<ViewTravelreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTravelreqComponent]
    });
    fixture = TestBed.createComponent(ViewTravelreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
