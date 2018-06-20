import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http,HttpModule,Headers } from '@angular/http' 
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { User } from '../models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
home;
buy:any;
users : User[];
plants:any;flowers:any;seeds:any;pots:any;
  constructor(private http:Http,private router : Router,public _user:UserService,public dataService : DataService) { }

  ngOnInit() {
  }
  addPlants(){
   this.plants = parseInt(prompt("How many you want"));
   alert("okay you are going to buy"+this.plants);
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