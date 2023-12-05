import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { DetailEmployeeComponent } from './employee/detail-employee/detail-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { AddTravelreqComponent } from './travelreq/add-travelreq/add-travelreq.component';
import { ViewTravelreqComponent } from './travelreq/view-travelreq/view-travelreq.component';
import { EditTravelreqComponent } from './travelreq/edit-travelreq/edit-travelreq.component';
import { DeleteTravelreqComponent } from './travelreq/delete-travelreq/delete-travelreq.component';
import { DetailTravelreqComponent } from './travelreq/detail-travelreq/detail-travelreq.component';
import { ApproveTravelreqComponent } from './travelreq/approve-travelreq/approve-travelreq.component';
import { BookTravelreqComponent } from './travelreq/book-travelreq/book-travelreq.component';
const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"listemp",component:ViewEmployeeComponent},
  {path:"addemp",component:AddEmployeeComponent},
  {path:"detail/:id",component:DetailEmployeeComponent},
  {path:"edit/:id",component:EditEmployeeComponent},
  {path:"delete/:id",component:DeleteEmployeeComponent},

  
  {path:"lsttravel",component:ViewTravelreqComponent},
  {path:"addtravel",component:AddTravelreqComponent},
  {path:"detailT/:id",component:DetailTravelreqComponent},
  {path:"editT/:id",component:EditTravelreqComponent},
  {path:"deleteT/:id",component:DeleteTravelreqComponent},
  {path:"approve/:id",component:ApproveTravelreqComponent},
  {path:"book/:id",component:BookTravelreqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
