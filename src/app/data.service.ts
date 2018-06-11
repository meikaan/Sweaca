import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http'; 
import 'rxjs/add/operator/toPromise';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	private usersUrl = 'http://localhost:3000/home/users';
  constructor(public http:Http) {} 
  // getUsers(){
  // 	return this.http.get("https://jsonplaceholder.typicode.com/users").map(res => res.json());
  // }
  getUsers():Promise<User[]>{
  		return this.http.get(this.usersUrl)
  		.toPromise()
  		.then(response => response.json().data as User[])
  		.catch(this.handleError);
  }
  private handleError(error : any):Promise<any>{
  	console.log('Error occured',error);
  	return Promise.reject(error.message || error);
  }
  //   signup(username,password){
  //   let url =  "http://localhost:4200/users";
  //   let body = JSON.stringify([username,password]);
  //   let headers:Headers;
  //   headers.append("Authentication","Basic" + btoa(username + ":" +password));
  //   headers.append("Content-type","application/x-www-form-encoded");
  //   headers.append("Authorization", "Basic VXNlcm5hbWU6UGFzc3dvcmQ=");
  //   this.http.post(url,body,{headers:headers})
  //   .subscribe(
  //       response => {
  //           // localStorage.setItem()
  //           this.router.navigate(['home']);
  //       },
  //       error => {
  //         if (error) {
  //           // code...
  //           console.log(error);
  //         }
  //       }
  //     )
  // }
}
