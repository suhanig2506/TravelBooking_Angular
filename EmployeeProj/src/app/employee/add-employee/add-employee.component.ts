import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Employee } from 'Models/employee';
import { Employees } from 'Models/employees';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  newEmp:Employee;
  constructor(private router:Router,private service:ApiserviceService){
    this.newEmp={empId:0,empFirstName:'',empLastName:'',empDob :  new Date( ),
    empAddress:'',
    empContact: 0
  }
  }
addemp(formValues:NgForm){
  this.service.addemp(this.newEmp).subscribe(
    data=>console.log(data),
    error=>console.log(error)
  );
  location.href='/listEmp'
}
}
