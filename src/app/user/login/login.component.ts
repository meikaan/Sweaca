import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Http,HttpModule,Headers } from '@angular/http' 
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { DataService } from '../../data.service';
// import { contentHeaders } from '../../headers';
// import { contentHeaders } from '../common/headers';

@Component({
  selector: 'app-login-component,signup',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
login;
username:string="";
password:string="";
  constructor(private http:Http,private router : Router,public _user:UserService,public dataService : DataService) { } 
  ngOnInit() {
  this.login = new FormGroup({
	username : new FormControl("", Validators.required),
	password : new FormControl("", Validators.required)
	});
  }
  onSubmit(){
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
    }
// }

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