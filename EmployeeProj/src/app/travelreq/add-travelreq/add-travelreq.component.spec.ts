import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravelreqComponent } from './add-travelreq.component';

describe('AddTravelreqComponent', () => {
  let component: AddTravelreqComponent;
  let fixture: ComponentFixture<AddTravelreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTravelreqComponent]
    });
    fixture = TestBed.createComponent(AddTravelreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
