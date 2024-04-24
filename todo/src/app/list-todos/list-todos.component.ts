import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit{

  todos : Todo[] = [];
  username : string = '';
  message : string = '';
  constructor(
    private todoDataService : TodoDataService
  ) {}

  ngOnInit(): void {
    this.refreshTodos();
  }
  
  deleteTodo(id: number) {
    this.todoDataService.deleteTodo("Abhishek",id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id}Successful`;
        this.refreshTodos();
      }
    );
    console.log(`delete ${id}`);
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos("Abhishek").subscribe(
      response => {
        this.todos = response;
        console.log(response);
      }
    );  
  }

  // [
  //   new Todo(1,'Learn to  move',false,new Date()),
  //   new Todo(2,'angular expert',false,new Date()),
  //   new Todo(3,'visit world',false,new Date())
  // ];
  // todo = {
  //   id : 1,
  //   description : 'learn to move'
  // };

}

export class Todo {
  
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
