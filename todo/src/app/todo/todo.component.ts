import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  id:number = 0;
  todo: Todo = new Todo(1,'',false,new Date());

  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false, new Date());
    if(this.id!=-1) {
      this.todoService.retrieveTodo('Abhishek',this.id).subscribe(
      data => this.todo = data
    );
    }
    
  }

  saveTodo() {
    if(this.id!=-1) {
      this.todoService.updateTodo('Abhishek',this.id,this.todo).subscribe(
        data => {
          this.todo = data;
          this.router.navigate(['todos']);
        }
      );
    } else {
      this.todoService.createTodo('Abhishek',this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }
    

    
  }
}
