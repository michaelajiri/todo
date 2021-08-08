import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string
  // [
  //   new Todo(1, 'Learn to dance', new Date(), true),
  //   new Todo(2, 'Learn to code with Angular', new Date(), false),
  //   new Todo(3, 'Visit India', new Date(), false),
  //   new Todo(4, 'Build Apps with Springboot', new Date(), true)

  // { id: 1, description: '' },
  // { id: 2, description: '' },
  // { id: 3, description: '' },
  // { id: 4, description: '' }
  //  ]

  // todo = {
  //   id: 1,
  //   description: 'Learn to dance'
  // }

  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('Michael89').subscribe(

      response => {
        // console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`Delete Todo ${id}`)
    this.todoService.removeTodo('Michael89', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id) {
    console.log(`Update Todo ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }
}