import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTravelreqComponent } from './delete-travelreq.component';

describe('DeleteTravelreqComponent', () => {
  let component: DeleteTravelreqComponent;
  let fixture: ComponentFixture<DeleteTravelreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTravelreqComponent]
    });
    fixture = TestBed.createComponent(DeleteTravelreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
