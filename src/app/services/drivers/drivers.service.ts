import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ConductorsModel } from '../../core/models/conductors.interface';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  private vari = environment.baseUrl;
  private respons = {};
  constructor(private http: HttpClient) {}

  getAllDrivers() {
    console.log(this.vari)
    return this.http.get(`${this.vari}conductor/conductor/`)
  }
  createDrivers(Drivers:ConductorsModel){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(Drivers);
    this.http.post(`${this.vari}conductor/conductor/`,body,{'headers':headers , observe: 'response'})
    .subscribe(
      response =>{
        console.log("creado con extio" + response)
      },
      error => {
        console.log("Post failed with the errors");
    },
    () => {
        console.log("Post Completed");
    }
    )
  }
  uptDriversAso (Drivers:any,id:number){
    
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(Drivers);
    this.http.put(`${this.vari}conductor/vehiculos_no_asignados/${id}/`,body,{'headers':headers , observe: 'response'})
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
  uptDriversDesAso (Drivers:any,id:number){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(Drivers);
    this.http.put(`${this.vari}conductor/vehiculos_asignados/${id}/`,body,{'headers':headers , observe: 'response'})
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

  getAllDriversAso(id:number) {
    return this.http.get(`${this.vari}conductor/vehiculos_asignados/${id}/`)
 }
  getAllDriversDeso(id:number) {
    return this.http.get(`${this.vari}conductor/vehiculos_no_asignados/${id}/`)
 }


}
