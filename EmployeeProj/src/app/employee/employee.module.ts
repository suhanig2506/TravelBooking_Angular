import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    DetailEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
