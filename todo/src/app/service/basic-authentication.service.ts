import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username:string, password:string) {
    
    let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password);
    
    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    
    });
    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,{headers}).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticaterUser',username);
            return data;
          }
        )
      );
    // console.log("Exceute hello world service");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}

export class AuthenticationBean {

  constructor(public message : string){}

}
