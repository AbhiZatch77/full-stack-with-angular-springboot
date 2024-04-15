import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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

  handleLogin() {
    if(this.username==="Abhishek" && this.password==="test"){
      this.invalidCreds = false;
    }
    else {
      this.invalidCreds = true;
    }
  }

}
