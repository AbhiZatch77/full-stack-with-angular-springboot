import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { NgIf } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  name = "";
  welcomeMessageFromService: string = ''
  errorMessageFromService: string = '';
  constructor(private route:ActivatedRoute,
    public welcomeDataService: WelcomeDataService
  ) {

  }
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log("get Welcome Message");
    // console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log("last line")
  }

  getWelcomeMessageWithParameter() {
    this.welcomeDataService.executeHelloWorldBeanServiceWithPath(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message;
    // console.log(response)
    // console.log(response.message);
  }

  handleErrorResponse(error: any) {
    this.errorMessageFromService = error.error.message;
  }

}
