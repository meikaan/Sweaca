import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http' 
import {APP_BASE_HREF} from '@angular/common';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { loginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    RegisterComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {
      path: '',
      component: UserComponent 
    },
    {
    	path : 'login',
    	component : loginComponent
    },
    {
      path : 'register',
      component : RegisterComponent
    },
    {
      path : 'home',
      component : HomeComponent
    }
    ]),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }