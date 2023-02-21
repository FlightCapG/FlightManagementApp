import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from './passenger';
import { PassengerDTO } from './passenger-dto';

@Injectable({
  providedIn: 'root'
})
export class PassengerOperationsService {

  baseURL:string = 'http://localhost:9090';
  passengerByNameEndPoint:string=this.baseURL+'/passenger/name';

  passengerArr:Passenger[] = [];

  constructor(private http:HttpClient) { 

    console.log("Inside Constructor "+this.passengerByNameEndPoint);

  }

  getPassengerDetailsByName(passengerName:string):Observable<PassengerDTO[]>{
    console.log("Inside Method 1 "+this.passengerByNameEndPoint);
    this.passengerByNameEndPoint=this.passengerByNameEndPoint+'/'+passengerName;
    console.log("After adding name 2 "+this.passengerByNameEndPoint);

    return this.http.get<PassengerDTO[]>(`${this.passengerByNameEndPoint}`);
  }


  Submit(passengerFromUser:Passenger)
  {
    
    this.passengerArr.push(passengerFromUser); 
    console.log("Inside Passenger Service : Passenger Added "+passengerFromUser.prnNumber);
    console.log(" Total Passengers Are :- "+this.passengerArr.length);
    
  }

  getPassengerArr():Passenger[]
  {
    return this.passengerArr;
  }

  getPassengerByPrn(searchPassengerPrn:number):Passenger
  {
    let outputPassenger:Passenger = new Passenger(0,'',0,'','','');
    for(let i=0;i<this.passengerArr.length;i++)
    {
      let thisPassenger:Passenger = this.passengerArr[i];
        if(thisPassenger.prnNumber == searchPassengerPrn)
        {
          outputPassenger = thisPassenger;
          break;
        }
    }
    
    return outputPassenger;
  }





}
