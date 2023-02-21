import { Component } from '@angular/core';
import { Passenger } from '../passenger';
import { PassengerDTO } from '../passenger-dto';
import { PassengerOperationsService } from '../passenger-operations.service';

@Component({
  selector: 'app-view-passenger',
  templateUrl: './view-passenger.component.html',
  styleUrls: ['./view-passenger.component.css']
})
export class ViewPassengerComponent {

  allPassengers:PassengerDTO[]=[];

  constructor(private passengerService:PassengerOperationsService)
  {

  }

  getPassengers(passengerName:string){
    this.passengerService.getPassengerDetailsByName(passengerName).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allPassengers = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }


}
