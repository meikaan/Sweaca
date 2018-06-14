import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http'; 
import 'rxjs/add/operator/toPromise';
import { map } from "rxjs/operators";
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	private usersUrl = 'http://localhost:3000/home/users';
	result :any;
  constructor(public http:Http) {} 
  }