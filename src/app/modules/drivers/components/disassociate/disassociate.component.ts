import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers/drivers.service';

@Component({
  selector: 'app-disassociate',
  templateUrl: './disassociate.component.html',
  styleUrls: ['./disassociate.component.css']
})
export class DisassociateComponent implements OnInit {
  blogList:any;
  dataCh:any;
  posts:any;

  constructor(public driversServ:DriversService) { }

  ngOnInit(): void {
    this.driversServ.getAllDriversDeso(1).subscribe(
      response =>{
        this.blogList = response;
      }
    );
  }
  onCategoriaPressed(categoriaSelected: any, checked: boolean){
    if (checked) { 
      this.dataCh = categoriaSelected;
    } 
  }
  onSumnit(){
    const id = this.dataCh.id;
    this.driversServ.uptDriversDesAso(this.dataCh,id)
  }

}
