import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

users:Array<any>;
  constructor(private dataService : DataService) { 
      // this.dataService.getUsers()
      // .subscribe(res => this.users = res);
  }
  ngOnInit() {
  }

}