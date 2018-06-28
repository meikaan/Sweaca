import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http,HttpModule,Headers } from '@angular/http' 
import { FormsModule } from '@angular/forms';
import { HostListener, ElementRef } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { trigger,state,style,animate,transition } from '@angular/animations'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
          trigger('scrollAnimation', [
          state('show', style({
            opacity: 1,
            transform: "translateX(0)"
          })),
          state('hide',   style({
            opacity: 0,
            transform: "translateX(100%)"
          })),
          transition('show => hide', animate('700ms ease-out')),
          transition('hide => show', animate('700ms ease-in'))
        ])]
})
export class DashboardComponent implements OnInit {
message:string="Added to Cart";
cartValue=0;
state='hide';
currentUser : User;
users : User[] = [];
conifer = 1999;bromeliads = 1299;lavender=2999;daisy=2499;bergamot=3299;aster=2199;flax=2099;hemp=2199;
    seeds:any;
    pots:any;
  constructor(
    private http:Http,
    private router : Router,
    public userService:UserService,
    public el:ElementRef
    ) { this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {
  }
  @HostListener('window:scroll',['$event'])
   checkScroll(){
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }
  }
  // addPlants(){
  // this.plants = parseInt(prompt("How many you want"));
  // alert("okay you are going to buy"+this.plants);
  // // this.dataService.myMethod(this.value);
  // this.userService.setFlowerData(this.plants);
  // this.router.navigate(['checkout']);
  // }
  addConifer(){
    this.cartValue =  this.cartValue + (this.conifer);
    alert(this.message);
  }
  addBromeliads(){
    this.cartValue =  this.cartValue + (this.bromeliads);
    alert(this.message);
  }
  addFlax(){
    this.cartValue =  this.cartValue + (this.flax);
    alert(this.message);
  }
  addHemp(){
    this.cartValue = this.cartValue + this.hemp;
    alert(this.message);
  }
  addAster(){
    this.cartValue =  this.cartValue + (this.aster);
    alert(this.message);
  }
  addBergamot(){
    this.cartValue =  this.cartValue + (this.bergamot);
    alert(this.message);
  }
  addDaisy(){
    this.cartValue =  this.cartValue + (this.daisy);
    alert(this.message);
  }
  addLavender(){
    this.cartValue =  this.cartValue + (this.lavender);
    alert(this.message);
  }
  finalPayment(){
    alert("Your total amount is Rs"+this.cartValue);
    this.userService.setFlowerData(this.cartValue);
    this.router.navigate(['checkout']);
  }
}