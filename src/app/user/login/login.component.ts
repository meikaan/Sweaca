import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Http,HttpModule,Headers } from '@angular/http' 
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { DataService } from '../../data.service';
import { AuthenticationService } from '../../authentication.service';
// import { contentHeaders } from '../../headers';
// import { contentHeaders } from '../common/headers';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
// login;
model:any={};
username:string="";
password:string="";
  constructor(
  private http:Http,
  private router : Router,
  public _user:UserService,
  public dataService : DataService,
  private authenticationService : AuthenticationService) { } 
  ngOnInit() {
      this.authenticationService.logout();
  }
  login(){
    this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate(['home']);
                },
                error => {
                  if(error){
                    console.log(error);
                  }
                    // this.alertService.error(error);
                    // this.loading = false;
                });
  }
}
      // code...
    //console.log(this.login.get('username').value);
     // getData(){
  //   this.http.get('https://my-json-server.typicode.com/typicode/demo/db')
  //   .subscribe((data) => {console.log(data)})
  //   // console.log()
  // }
  // let headers : Headers;
  // let body = JSON.stringify([this.username,this.password]);
  // headers.append("Authentication","Basic" + btoa(this.username + "this is" +this.password));
  // headers.append("Content-Type","application/x-www-form-encoded");
  // this.http.post('http://localhost:4200/users',body,{headers:headers})
  // .subscribe(
  //   response => {
  //                 localStorage.setItem('id_token',response.json().id_token);
  //                 this.router.navigate(['home']);
  //               },
  //   error =>   {
  //                 console.log(error);
  //              }            
  //   );

/*    onSubmit(){
    this.username = this.login.get('username').value;
    this.password = this.login.get('password').value;
    if (this.username == 'jitesh' && this.password == 'jitesh') {
    alert("Thank u for login");
    this.login.reset();
    // this.user.setUserLoggedIn();
    this.router.navigate(['home']);
    }
    else{
      alert("Invalid Credentials");
      this.login.reset();
    }*/

//   }