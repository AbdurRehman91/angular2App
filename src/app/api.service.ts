import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Task } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllTodos(): Observable<Task[]> {
    return this.http
      .get(API_URL + '/tasks')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Task(todo));
      })
      .catch(this.handleError);
  }

  public createTodo(todo: Task): Observable<Task> {
    return this.http
      .post(API_URL + '/tasks', todo)
      .map(response => {
        return new Task(response.json());
      })
      .catch(this.handleError);
  }

  public getTodoById(todoId: number): Observable<Task> {
    return this.http
      .get(API_URL + '/tasks/' + todoId)
      .map(response => {
        return new Task(response.json());
      })
      .catch(this.handleError);
  }

  public updateTodo(todo: Task): Observable<Task> {
    return this.http
      .put(API_URL + '/tasks/' + todo.id, todo)
      .map(response => {
        return new Task(response.json());
      })
      .catch(this.handleError);
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/tasks/' + todoId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
