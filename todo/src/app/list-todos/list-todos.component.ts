import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todos = [
    {id:1,desc:'Learn to  move'},
    {id:2,desc:'angular expert'},
    {id:3,desc:'visit world'}
  ];
  // todo = {
  //   id : 1,
  //   description : 'learn to move'
  // };

}
