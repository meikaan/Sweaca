import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Http,HttpModule,Headers } from '@angular/http' 
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { AuthenticationService } from '../authentication.service';
// import { contentHeaders } from '../../headers';
// import { contentHeaders } from '../common/headers';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
model:any={};
username:string="";password:string="";
// username:string="";
// password:string="";
  constructor(
  private http:Http,
  private router : Router,
  public _user:UserService,
  public dataService : DataService,
  private authenticationService : AuthenticationService) { } 
  ngOnInit() {
      // this.authenticationService.logout();
      this.loginForm = new FormGroup({
        username : new FormControl("",Validators.required),
        password : new FormControl("",Validators.required)
      });
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