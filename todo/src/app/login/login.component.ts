import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage = "Invalid Credentials"
  username = "admin";
  password = "admin";
  invalidCreds = false;

  constructor(private router: Router, 
    private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private basicAuthenticationService : BasicAuthenticationService
  ) {

  }

  handleLogin() {
    // if(this.username==="Abhishek" && this.password==="test"){
      //redirect to welcome page
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)) { 
      this.router.navigate(['welcome',this.username]);
      this.invalidCreds = false;
    }
    else {
      this.invalidCreds = true;
    }
  }

  handleBasicAuthLogin() {
    
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome',this.username]);
          this.invalidCreds = false;
        },
        error => {
          console.log(error);
          this.invalidCreds = true;
        }
      ); 
  }

  handleJWTAuthLogin() {
    
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome',this.username]);
          this.invalidCreds = false;
        },
        error => {
          console.log(error);
          this.invalidCreds = true;
        }
      ); 
  }

}
