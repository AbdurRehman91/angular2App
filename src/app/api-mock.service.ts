import { Injectable } from '@angular/core';
import { Task } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllTodos(): Observable<Task[]> {
    return Observable.of([
      new Task({id: 1, title: 'Read article', complete: false})
    ]);
  }

  public createTodo(todo: Task): Observable<Task> {
    return Observable.of(
      new Task({id: 1, title: 'Read article', complete: false})
    );
  }

  public getTodoById(todoId: number): Observable<Task> {
    return Observable.of(
      new Task({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateTodo(todo: Task): Observable<Task> {
    return Observable.of(
      new Task({id: 1, title: 'Read article', complete: false})
    );
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return null;
  }
}
