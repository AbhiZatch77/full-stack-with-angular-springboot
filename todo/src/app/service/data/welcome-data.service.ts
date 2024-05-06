import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Exceute hello world service");
  }

  executeHelloWorldBeanServiceWithPath(name : string) {
    // let basicAuthHeaderString = this.createBasicAuthHeader();
    // let headers = new HttpHeaders({
    //   Authorization : basicAuthHeaderString
    // });
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`
      //,{headers}
    );
    // console.log("Exceute hello world service");
  }

  // createBasicAuthHeader() {
  //   let username = "admin";
  //   let password = "admin";
  //   let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password); 

  //   return basicAuthHeaderString;
  // }

}

export class HelloWorldBean {
  
  constructor(public message:string){}

}
