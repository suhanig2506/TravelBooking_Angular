import { Component, OnInit } from '@angular/core';
import { TravelRequests } from 'Models/TravelRequests';
import { ActivatedRoute,Router } from '@angular/router';
import { TravelRequest } from 'Models/TravelRequest';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-edit-travelreq',
  templateUrl: './edit-travelreq.component.html',
  styleUrls: ['./edit-travelreq.component.css']
})
export class EditTravelreqComponent implements OnInit{
  thisTravel:TravelRequest=new TravelRequest;
  id:number=-1;
  index:number=-1;
  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
    private service:ApiserviceService){}
    ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.params['id'];
      this.service.getDetailTravelRequest(this.id).subscribe(
        data=>this.thisTravel=data,error=>console.log(error)
      );
    }
    edittravel(){
      this.service.edittravel(this.id,this.thisTravel).subscribe(
        data=>console.log(data),
        error=>console.log(error)
      );
      location.href='listTravel';
    }

  

}
