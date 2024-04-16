import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  // isUserLoggegIn: boolean = false;
  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService) {

  }

  ngOnInit(): void {
    // this.isUserLoggegIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
