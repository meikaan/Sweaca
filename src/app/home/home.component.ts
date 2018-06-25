import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

users:Array<any>;
  constructor(private router : Router) { 
      // this.dataService.getUsers()
      // .subscribe(res => this.users = res);
  }
  ngOnInit() {
  }
  navigateToLogin(){
  	this.router.navigate(['login']);
  }
  navigateToRegister(){
  	this.router.navigate(['register']);
  }
}