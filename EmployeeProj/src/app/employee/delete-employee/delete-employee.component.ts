import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Employees } from 'Models/employees';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit{
  id:number=-1;
  index:number=-1;
  err:string='';
  allEmployees:Employees=new Employees();
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private service:ApiserviceService){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.deleteemp(this.id).subscribe(data=>location.href='/listEmp',error=>{this.err=error.error;console.log(this.err)});
  }


}
