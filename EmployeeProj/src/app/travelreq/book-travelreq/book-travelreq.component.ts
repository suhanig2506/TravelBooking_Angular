import { Component, OnInit } from '@angular/core';
import { TravelRequest } from 'Models/TravelRequest';
import { TravelRequests } from 'Models/TravelRequests';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-travelreq',
  templateUrl: './book-travelreq.component.html',
  styleUrls: ['./book-travelreq.component.css']
})
export class BookTravelreqComponent implements OnInit {
  llTravelrequests:TravelRequests=new TravelRequests;
  newTravelrequest:TravelRequest=new TravelRequest;
  id: number = -1;
  index:number = -1;
 
  constructor(private activatedRoute:ActivatedRoute,private router:Router, private service:ApiserviceService)
  {}
 
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service. getDetailTravelRequest(this.id).subscribe(data=>this.newTravelrequest=data,error=>console.log(error));
   
  }
 
 
  bookTravelrequest()
  {
    this.service.bookTravelrequest(this.id, this.newTravelrequest).subscribe(data=>{console.log(data);
    },error=>console.log(error));
    location.href = '/listTravelrequest';
  }
}


