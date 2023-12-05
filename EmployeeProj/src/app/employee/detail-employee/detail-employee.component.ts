import { Component, OnInit } from '@angular/core';
import { Employee } from 'Models/employee';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Employees } from 'Models/employees';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit{
  allEmp:Employees=new Employees();
  thisEmp:any;
  id:number=0;
  constructor(private activatedRoute:ActivatedRoute,private service:ApiserviceService){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.getDetailEmployee(this.id).subscribe(data=>this.thisEmp=data);
  }
  
}
