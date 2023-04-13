import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  List:any;

  constructor(public driversServ:VehicleService) { }
  

  ngOnInit(): void {
    this.driversServ.getAllVehicles().subscribe(
      response =>{
        this.List = response;
      }
    );
    //  const data =[
    //   {
    //     id:1,
    //     placa:"dasd",
    //     modelo:"dasd",
    //     capacidad:"dasd",
    //   },
    //   {
    //     id:2,
    //     placa:"dasd",
    //     modelo:"dasd",
    //     capacidad:"dasd",
    //   },
    //   {
    //     id:3,
    //     placa:"dasd",
    //     modelo:"dasd",
    //     capacidad:"dasd",
    //   },
      
    // ]
    // this.List = data;
  }

}
