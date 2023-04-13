import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers/drivers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  List:any;
  constructor(public driversServ:DriversService) { }

  ngOnInit(): void {
    this.driversServ.getAllDrivers().subscribe(
      response =>{
        this.List = response;
      }
    );
    // const data =[
    //   {
    //     id:1,
    //     nombre: "jhd-323",
    //     apellido: "Apche",
    //     direccion: "80 kl",
    //     telefono: "80 kl",
    //     identificacion:"dsa",
    //   },
    //   {
    //     id:2,
    //     nombre: "jhd-323",
    //     apellido: "Apche",
    //     direccion: "80 kl",
    //     telefono: "80 kl",
    //     identificacion:"dsa",
    //   },
    //   {
    //     id:3,
    //     nombre: "jhd-323",
    //     apellido: "Apche",
    //     direccion: "80 kl",
    //     telefono: "80 kl",
    //     identificacion:"dsa",
    //   },
      
    // ]
    // this.List = data;
  }

}
