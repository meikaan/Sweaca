import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http' 
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
username:string="";
submitted=false;
title = 'app';
  constructor(private router : Router,private userService :UserService) { }

  ngOnInit() {
  		this.registerForm = new FormGroup({
		username : new FormControl("", Validators.required),
		email : new FormControl("", Validators.required),
		password : new FormControl("",[Validators.required,Validators.minLength(6)]),
		contact : new FormControl("",Validators.required),
		address : new FormControl("", Validators.required)
	});
  }
	onSubmit(){
		this.submitted = true;
		this.username= this.registerForm.get('username').value;
		if(this.registerForm.invalid){
			return;
		}
		this.userService.create(this.registerForm.value)
		.pipe(first())
		.subscribe(
			data=>{
				alert("Thanks for registering with us"+this.username);
				this.router.navigate(['login']);
			},
			error=>{
				if(error){
					console.log("Error occured here : "+error);
				}
			});
		// console.log(this.registerForm.get('username').value);
		// this.registerForm.reset();
		// this.router.navigate(['login']);
	}
}