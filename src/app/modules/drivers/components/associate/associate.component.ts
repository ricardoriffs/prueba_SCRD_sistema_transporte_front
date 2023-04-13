import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { drivers } from 'src/app/models/drivers';
import { DriversService } from 'src/app/services/drivers/drivers.service';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {
  posts:any;
  constructor(public driversServ:DriversService) { }
  blogList:any;
  dataCh:any;
  ngOnInit(): void {
    this.driversServ.getAllDriversAso(1).subscribe(
      response =>{
        this.blogList = response;
      }
    );
    // const data =[
    //   {
    //     id:1,
    //     placa: "jhd-323",
    //     modelo: "Apche",
    //     capacidad: "80 kl"
    //   },
    //   {
    //     id:2,
    //     placa: "jhd-323",
    //     modelo: "Apche",
    //     capacidad: "80 kl"
    //   },
    //   {
    //     id:3,
    //     placa: "jhd-323",
    //     modelo: "Apche",
    //     capacidad: "80 kl"
    //   },
      
    // ]
    // this.blogList = data;

    }
    onCategoriaPressed(categoriaSelected: any, checked: boolean){
      if (checked) { 
        this.dataCh = categoriaSelected;
      } 
    }
    onSumnit(){
      const id = this.dataCh.id;
      this.driversServ.uptDriversAso(this.dataCh,id)
    }
}
