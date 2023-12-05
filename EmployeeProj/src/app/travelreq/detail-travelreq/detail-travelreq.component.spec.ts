import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTravelreqComponent } from './detail-travelreq.component';

describe('DetailTravelreqComponent', () => {
  let component: DetailTravelreqComponent;
  let fixture: ComponentFixture<DetailTravelreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTravelreqComponent]
    });
    fixture = TestBed.createComponent(DetailTravelreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
