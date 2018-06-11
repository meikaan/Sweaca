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
users : User[];
  constructor(private http:Http,private router : Router,public _user:UserService,public dataService : DataService) { }

  ngOnInit() {
  }
  onClick(){
  	this.router.navigate(['']);
  }
  getUsersDetails(){
  	this.dataService.getUsers().then(users=>
  		this.users = users
  		);
  }
}
