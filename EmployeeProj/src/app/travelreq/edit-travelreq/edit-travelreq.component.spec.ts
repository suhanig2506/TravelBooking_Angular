import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTravelreqComponent } from './edit-travelreq.component';

describe('EditTravelreqComponent', () => {
  let component: EditTravelreqComponent;
  let fixture: ComponentFixture<EditTravelreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTravelreqComponent]
    });
    fixture = TestBed.createComponent(EditTravelreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
