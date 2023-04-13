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
  constructor(private http: HttpClient) {}

  getAllDrivers() {
    return this.http.get(this.vari + '/');
  }
  createDrivers(){
    
  }
}
