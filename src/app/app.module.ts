import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http' 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { DataService } from './data.service';
import { UserService } from './user.service';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './helpers/index';
import { AuthenticationService} from './authentication.service';
 import { AuthguardGuard } from './authguard.guard';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    CheckoutComponent,
    TeamComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {
      path: '',
      component: LoginComponent 
    },
    {
    	path : 'login',
    	component : LoginComponent
    },
    {
      path : 'register',
      component : RegisterComponent
    },
    {
      path : 'dashboard',
      // canActivate : [AuthguardGuard],
      component : DashboardComponent
    },
    {
      path : 'contact',
      component : ContactComponent
    },
    {
      path : 'checkout',
      component : CheckoutComponent
    },
    {
      path : 'team',
      component : TeamComponent
    },
    {
      path : 'home',
      component : HomeComponent
    }
    ]),
  ],
  providers: [
      DataService,
      UserService,
      AuthenticationService,
      AuthguardGuard,
      HttpClientModule,
      JwtInterceptorProvider,
      ErrorInterceptorProvider
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }