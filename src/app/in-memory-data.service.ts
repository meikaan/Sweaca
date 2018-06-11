import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
  	let users = [
                  { 
                  	id:1,
                    username : 'jitesh',
                    email: 'jitesh@gmail.com',
                    password : 'helloworld',
                    contact : '9876543210',
                    city : 'Banglore' 
                  },
                  { 
                    id:2,
                    username : 'monika',
                    email: 'monika@gmail.com',
                    password : 'hello1world',
                    contact : '9876543211',
                    city : 'Hyderabad' 
                  },
                  { 
                  	id:3,
                    username : 'tamil',
                    email: 'tamil@gmail.com',
                    password : 'hello2world',
                    contact : '9876543212',
                    city : 'Chennai'
                  }
    ];
    return {users};
  }
}
