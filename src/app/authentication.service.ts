import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
apiUrl = "http:localhost:3000";
  constructor(private http: HttpClient, private _http:Http) { }
  login(username: string, password: string) {
        return this.http.post<any>(this.apiUrl + '/users/authenticate', { username: username, password: password })
            .pipe(map(user => {
                            // login successful if there's a jwt token in the response
                            if (user && user.token) {
                                // store user details and jwt token in local storage to keep user logged in between page refreshes
                                localStorage.setItem('currentUser', JSON.stringify(user));
                            }
            
                            return user;
                        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
