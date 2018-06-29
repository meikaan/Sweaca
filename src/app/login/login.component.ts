import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Http,HttpModule,Headers } from '@angular/http' 
import { Router } from '@angular/router';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { first } from 'rxjs/operators';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
// import { contentHeaders } from '../../headers';
// import { contentHeaders } from '../common/headers';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations : [
  [trigger('popOverState',[
    state('show',style({
      opacity : 1
    })),
    state('hide',style({
      opacity : 0
    })),
    transition('show => hide',animate('600ms ease-out')),
    transition('hide => show',animate('600ms ease-in'))
    ])],[trigger('popOverStateDuplicate',[
    state('show',style({
      opacity : 1
    })),
    state('hide',style({
      opacity : 0
    })),
    transition('show => hide',animate('600ms ease-out')),
    transition('hide => show',animate('600ms ease-in'))
    ])]
  ]
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
show=false;show1=true;
message:string;
username:string="";password:string="";
// username:string="";
// password:string="";
  constructor(
  private http:Http,
  private router : Router,
  public _user:UserService,
  private authenticationService : AuthenticationService) { } 
  get stateName(){
    return this.show ? 'show':'hide';
  }
  get stateNameDuplicate(){
     return this.show1 ? 'show' :'hide'
  }
  toggle(){
    this.show = !this.show;
    this.show1 = !this.show1;
  }
  ngOnInit() {
      // this.authenticationService.logout();
      this.loginForm = new FormGroup({
        username : new FormControl("",Validators.required),
        password : new FormControl("",Validators.required)
      });
  }
  sentMail(){
    this.message = "Link Has been sent to your mail id";
    setTimeout(()=>this.toggle(),2000);
  }
  get f(){return this.loginForm.controls}
  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
    this.authenticationService.login(this.f.username.value,this.f.password.value)
      .pipe(first())
      .subscribe(
          (data:any)=>{
            this.router.navigate(['dashboard']);
          },
          (error)=>{
            if(error){
              alert("Username or Password is incorrect");
              this.loginForm.reset();
            }
          }
        )
  }
}