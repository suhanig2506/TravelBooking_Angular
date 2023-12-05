import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTravelreqComponent } from './book-travelreq.component';

describe('BookTravelreqComponent', () => {
  let component: BookTravelreqComponent;
  let fixture: ComponentFixture<BookTravelreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookTravelreqComponent]
    });
    fixture = TestBed.createComponent(BookTravelreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
