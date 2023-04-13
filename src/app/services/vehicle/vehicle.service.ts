import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConductorsModel } from '../../core/models/conductors.interface';
import { environment } from 'src/environments/environment';
import { error } from 'console';
import { VehicleModel } from 'src/app/core/models/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vari = environment;
  private respons = {};
  constructor(private http: HttpClient) { }

  getAllVehicles(){
    this.http.get<any[]>(this.vari + '/vehiculo/vehiculo/').subscribe(data =>{
      this.respons = data;
      return this.respons;
     },
     error=>{

     }
     )
  }
  createVeh(Veh:VehicleModel){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(Veh);
    this.http.post(this.vari + 'conductor/conductor/',body,{'headers':headers , observe: 'response'})
    .subscribe(
      response =>{
        console.log("creado con extio"+response)
      },
      error => {
        console.log("Post failed with the errors");
    },
    () => {
        console.log("Post Completed");
    }
    )
  }
}
