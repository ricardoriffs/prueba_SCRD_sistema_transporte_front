import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConductorsModel } from '../../core/models/conductors.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DriversService {
  private vari = environment;
  private respons = {};
  constructor(private http: HttpClient) {}

  getAllDrivers() {
     this.http.get<any[]>(this.vari + 'conductor/conductor/').subscribe(data =>{
      this.respons = data;
      return this.respons;
     },
     error=>{

     }
     )
  }
  createDrivers(Drivers:ConductorsModel){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(Drivers);
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
  uptDriversAso (Drivers:any,id:number){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(Drivers);
    this.http.put(this.vari + `conductor/vehiculos_no_asignados/${id}`,body,{'headers':headers , observe: 'response'})
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
    this.http.put(this.vari + `conductor/vehiculos_asignados/${id}`,body,{'headers':headers , observe: 'response'})
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
    this.http.get<any[]>(this.vari + `/conductor/vehiculos_asignados/${id}`).subscribe(data =>{
     this.respons = data;
     return this.respons;
    },
    error=>{

    }
    )
 }
  getAllDriversDeso(id:number) {
    return this.http.get(this.vari + `conductor/vehiculos_no_asignados/${id}`)

 }

}
