import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage = "Invalid Credentials"
  username = "Abhishek";
  password = "test";
  invalidCreds = false;

  constructor(private router: Router) {

  }

  handleLogin() {
    if(this.username==="Abhishek" && this.password==="test"){
      //redirect to welcome page
      this.router.navigate(['welcome']);
      this.invalidCreds = false;
    }
    else {
      this.invalidCreds = true;
    }
  }

}
