import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { User } from '../models/user';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
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
export class CheckoutComponent implements OnInit {
myTotal:any;
show=false;
currentUser : User;
public value:string="";
  constructor(private userService:UserService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
    this.myTotal=this.userService.getFlowerData();
  }
  get stateName(){
    return this.show ? 'show':'hide';
  }
  toggle(){
    this.show = !this.show;
  }
}
