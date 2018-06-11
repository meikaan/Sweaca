import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http' 
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {APP_BASE_HREF} from '@angular/common';
import { DataService } from './data.service';
import { UserService } from './user.service';
import { InMemoryDataService } from './in-memory-data.service';
// import { AuthguardGuard } from './authguard.guard';
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
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
      // canActivate : [AuthguardGuard],
      component : HomeComponent
    }
    ]),
  ],
  providers: [DataService,UserService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }