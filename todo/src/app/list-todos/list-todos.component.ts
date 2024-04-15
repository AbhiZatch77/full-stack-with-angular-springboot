import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todos = [
    new Todo(1,'Learn to  move',false,new Date()),
    new Todo(2,'angular expert',false,new Date()),
    new Todo(3,'visit world',false,new Date())
  ];
  // todo = {
  //   id : 1,
  //   description : 'learn to move'
  // };

}

export class Todo {
  
  constructor(
    public id: number,
    public desc: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
