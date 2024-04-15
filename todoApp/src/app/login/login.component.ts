import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usernname = "username";
  password = "password";

  handleLogin() {
    console.log(this.usernname);
    console.log(this.password);
  }
}
