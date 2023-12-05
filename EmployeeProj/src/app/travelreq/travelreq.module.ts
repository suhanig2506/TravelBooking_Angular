import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTravelreqComponent } from './add-travelreq/add-travelreq.component';
import { ViewTravelreqComponent } from './view-travelreq/view-travelreq.component';
import { EditTravelreqComponent } from './edit-travelreq/edit-travelreq.component';
import { DeleteTravelreqComponent } from './delete-travelreq/delete-travelreq.component';
import { DetailTravelreqComponent } from './detail-travelreq/detail-travelreq.component';
import { ApproveTravelreqComponent } from './approve-travelreq/approve-travelreq.component';
import { BookTravelreqComponent } from './book-travelreq/book-travelreq.component';
import { NgForm } from '@angular/forms';



@NgModule({
  declarations: [
    AddTravelreqComponent,
    ViewTravelreqComponent,
    EditTravelreqComponent,
    DeleteTravelreqComponent,
    DetailTravelreqComponent,
    ApproveTravelreqComponent,
    BookTravelreqComponent
  ],
  imports: [
    CommonModule,
    NgForm
  ]
})
export class TravelreqModule { }
