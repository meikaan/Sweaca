import { Component, OnInit } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations : [
  trigger('popOverState',[
    state('show',style({
      opacity : 1
    })),
    state('hide',style({
      opacity : 0
    })),
    transition('show => hide',animate('600ms ease-out')),
    transition('hide => show',animate('600ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {
show=false;

users:Array<any>;
  constructor(private router : Router) { 
      // this.dataService.getUsers()
      // .subscribe(res => this.users = res);
  }
  get stateName(){
    return this.show ? 'show':'hide';
  }
  toggle(){
    this.show = !this.show;
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