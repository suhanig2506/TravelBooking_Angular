import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { TravelRequest } from 'Models/TravelRequest';
import { TravelRequests } from 'Models/TravelRequests';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-delete-travelreq',
  templateUrl: './delete-travelreq.component.html',
  styleUrls: ['./delete-travelreq.component.css']
})
export class DeleteTravelreqComponent implements OnInit{
  id: number = -1;
  index:number = -1;
  err:string= '';
  allTravels:TravelRequests=new TravelRequests();
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private service:ApiserviceService)
  {}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.deletetravel(this.id).subscribe(
      data=>location.href='lsttravel',error=>{
        this.err=error.error;console.log(this.err)
      }
    );
  }

}
