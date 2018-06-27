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
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class DashboardComponent implements OnInit {
home;
state='hide';
currentUser : User;
users : User[] = [];
message:string;
plants:any;flowers:any;seeds:any;pots:any;
  constructor(
    private http:Http,
    private router : Router,
    public _user:UserService,
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