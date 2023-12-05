import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { DetailEmployeeComponent } from './employee/detail-employee/detail-employee.component';
import { ApiserviceService } from './apiservice.service';
import { AddTravelreqComponent } from './travelreq/add-travelreq/add-travelreq.component';
import { ViewTravelreqComponent } from './travelreq/view-travelreq/view-travelreq.component';
import { EditTravelreqComponent } from './travelreq/edit-travelreq/edit-travelreq.component';
import { DetailTravelreqComponent } from './travelreq/detail-travelreq/detail-travelreq.component';
import { DeleteTravelreqComponent } from './travelreq/delete-travelreq/delete-travelreq.component';
import { ApproveTravelreqComponent } from './travelreq/approve-travelreq/approve-travelreq.component';
import { BookTravelreqComponent } from './travelreq/book-travelreq/book-travelreq.component';
//import { AddTravelReqComponent } from './TravelReq/add-travel-req/add-travel-req.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    DetailEmployeeComponent,
    ViewTravelreqComponent,
    AddTravelreqComponent,
    EditTravelreqComponent,
    DetailTravelreqComponent,
    DeleteTravelreqComponent,
    ApproveTravelreqComponent,
    BookTravelreqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
    
  ],
  providers: [HttpClient,ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
