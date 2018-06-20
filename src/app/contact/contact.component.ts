import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactForm;
submitted : Boolean;
  constructor() { }

  ngOnInit() {
  	this.contactForm = new FormGroup({
  		firstname : new FormControl("",Validators.required),
  		lastname : new FormControl("",Validators.required),
  		email : new FormControl("",Validators.required)
  	})
  }
  onSubmit(){
  	this.submitted = true;
  	if(this.contactForm.invalid){
  		return;
  	}
  	alert("Your query has been sent successfully");
  	this.contactForm.reset();
  }

}
