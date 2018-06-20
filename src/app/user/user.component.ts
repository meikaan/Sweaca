import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

users:Array<any>;
  constructor(private dataService : DataService) { 
  		// this.dataService.getUsers()
  		// .subscribe(res => this.users = res);
  }
  ngOnInit() {
  }

}
