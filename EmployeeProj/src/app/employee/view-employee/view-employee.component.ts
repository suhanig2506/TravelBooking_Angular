import { Component, OnInit } from '@angular/core';
import { Employee } from 'Models/employee';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  lstEmp:any;
  constructor(private service:ApiserviceService){}
  ngOnInit(): void {
    this.service.getEmployees().subscribe(data =>{
      this.lstEmp=data
    });
    console.log(this.lstEmp);
  }
  getemployeeById()
  {
    console.log(this.lstEmp);
 
    this.lstEmp = [
      {empId:1,empFirstName:'Suhani',empLastName:'Gaikwad',empDob :new Date('2001-06-25'),empAddress:'Khed',empContact:'7875'},
      {empId:2,empFirstName:'Sakshi',empLastName:'Bankar',empDob :new Date('2001-03-30'),empAddress:'Nashik',empContact:'9890'},
      {empId:3,empFirstName:'Pratiksha',empLastName:'Dange',empDob :new Date('2001-09-15'),empAddress:'Pune',empContact:'7860'},
      {empId:4,empFirstName:'Vishwa',empLastName:'Sinkar',empDob :new Date('2001-06-05'),empAddress:'Jalgaon',empContact:'9695'},
      {empId:5,empFirstName:'Prachi',empLastName:'Chavan',empDob :new Date('2001-07-09'),empAddress:'Jalgaon',empContact:'8905'}
    ];
  }
  trackByEmployeeId(index:number,employee:any)
  {
    return employee.empId
  }

}
