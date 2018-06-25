import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http,HttpModule,Headers } from '@angular/http' 
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../models/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
home;
currentUser : User;
users : User[] = [];
message:string;
plants:any;flowers:any;seeds:any;pots:any;
  constructor(
      private http:Http,
    private router : Router,
    public _user:UserService
    ) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

  ngOnInit() {
  }
  addPlants(){
   // this.plants = parseInt(prompt("How many you want"));
   // alert("okay you are going to buy"+this.plants);
   // this.dataService.myMethod(this.value);
   this.router.navigate(['checkout']);

  }
  addFlowers(){
   this.flowers = parseInt(prompt("How many you want"));
   alert("okay you are going to buy"+this.flowers);
   this.router.navigate(['checkout']);
  }
  addSeeds(){
   this.seeds = parseInt(prompt("How many you want"));
   alert("okay you are going to buy"+this.seeds);
   this.router.navigate(['checkout']);
  }
  addPots(){
   this.pots = parseInt(prompt("How many you want"));
   alert("okay you are going to buy"+this.pots);
   this.router.navigate(['checkout']);  
  } 
  // getUsersDetails(){
  // 	this.dataService.getUsers().then(users=>
  // 		this.users = users
  // 		);
  // }
}