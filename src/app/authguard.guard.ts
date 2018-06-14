import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private user : UserService,private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
  // canActivate():boolean{
  // 	if(!this.user.isAuthenticated()){
  // 		this.router.navigate(['']);
  // 		return false;
  // 	}
  // 		return true;
  // }
}
}