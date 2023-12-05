import { Component ,OnInit } from '@angular/core';
import { TravelRequest } from 'Models/TravelRequest';
import { TravelRequests } from 'Models/TravelRequests';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-detail-travelreq',
  templateUrl: './detail-travelreq.component.html',
  styleUrls: ['./detail-travelreq.component.css']
})
export class DetailTravelreqComponent implements OnInit{
  allTravels:TravelRequests=new TravelRequests();
  thisTravel:any;
  id:number=0;
  constructor(private acttivatedRoute:ActivatedRoute,private service:ApiserviceService){}
  ngOnInit(): void {
    this.id=this.acttivatedRoute.snapshot.params['id'];
    this.service.getDetailTravelRequest(this.id).subscribe(data=>this.thisTravel=data);
  }

}
