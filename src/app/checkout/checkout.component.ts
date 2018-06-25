import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
message : string;
hello:string;
currentUser : User;
public value:string="";
  constructor() { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
  }
  // newMessage(){
  // 	this.dataService.changeMessage("Hello from Dashboard");
  // }

}
