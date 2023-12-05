import { Component, OnInit } from '@angular/core';
import { Employee } from 'Models/employee';
import { Employees } from 'Models/employees';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
    thisEmp:Employee=new Employee;
  //newEmp:Employee=new Employee;
  id:number=-1;
  index:number=-1;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,
    private service:ApiserviceService){}
    ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.params['id'];
      this.service.getDetailEmployee(this.id).subscribe(data=>this.thisEmp=data,error=>console.log(error));
    }
    editemp(){
      this.service.editemp(this.id,this.thisEmp).subscribe(
        data=>console.log(data),
        error=>console.log(error)
        
      );
      location.href='/listEmp'
    }


}
