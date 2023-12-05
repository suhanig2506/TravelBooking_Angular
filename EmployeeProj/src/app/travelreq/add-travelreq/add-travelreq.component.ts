import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TravelRequest } from 'Models/TravelRequest';
import { TravelRequests } from 'Models/TravelRequests';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-travelreq',
  templateUrl: './add-travelreq.component.html',
  styleUrls: ['./add-travelreq.component.css']
})
export class AddTravelreqComponent {
 newTravel:TravelRequest;
 constructor(private router:Router,private service:ApiserviceService){
  this.newTravel={requestId:0,
    empId:0,
    locFrom :'',
    locTo :'',
    approvalStatus :'',
    bookingStatus :'',
    currentStatus:'',
    reqDate :new Date( )}
 }
 addtravel(formValues:NgForm){
  this.service.addtravel(this.newTravel).subscribe(
    data=>console.log(data),
    error=>console.log(error)
  );
  location.href='/lsttravel'
 }


}
