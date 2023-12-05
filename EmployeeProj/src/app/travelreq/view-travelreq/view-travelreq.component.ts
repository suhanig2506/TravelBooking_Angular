import { Component ,OnInit} from '@angular/core';
import { TravelRequest } from 'Models/TravelRequest';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-view-travelreq',
  templateUrl: './view-travelreq.component.html',
  styleUrls: ['./view-travelreq.component.css']
})
export class ViewTravelreqComponent implements OnInit {
  lsttravel:TravelRequest[]=[];
  constructor(private service:ApiserviceService){}
  ngOnInit(): void {
    this.service.getTravelRequest().subscribe(data =>
      {
        this.lsttravel=data;
      });
      console.log(this.lsttravel);
  }

  
}
