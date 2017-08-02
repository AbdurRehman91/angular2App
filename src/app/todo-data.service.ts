import { Injectable } from '@angular/core';
import { Task } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /todos
  addTodo(todo: Task): Observable<Task> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<Task> {
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Task): Observable<Task> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Task[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<Task> {
    return this.api.getTodoById(todoId);
  }

  // Toggle complete
  toggleTodoComplete(todo: Task) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}
