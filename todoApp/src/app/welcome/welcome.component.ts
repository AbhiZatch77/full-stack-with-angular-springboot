import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  message : string = "This is a meesage";
  
  constructor() {
   
  }

  ngOnInit(): void {
    this.message = "message changed";
  }

}
