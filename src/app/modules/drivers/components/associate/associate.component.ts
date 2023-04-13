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
  blogList?: Array<any> = [];
  ngOnInit(): void {
    this.driversServ.getAllDriversDeso(1).subscribe(
      response =>{
        this.posts = response;
      }
    );
    }
}
