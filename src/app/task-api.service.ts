import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NewTask } from './todo';

const API_URL = environment.apiUrl;

@Injectable()
export class TaskApiService {

  constructor(private http: Http) 
  {

  }

  public getAllTasks(): Observable<NewTask[]> 
  {
    return this.http.get(API_URL + '/tasks').map(response => 
    {
        const taskConstant = response.json();
        return taskConstant.map((todo) => new NewTask(taskConstant));
      }).catch(this.handleError);
   }

  public addNewTask(todo: NewTask) 
  {
    // will use this.http.post()

    return this.http.post(API_URL + '/tasks', todo).map(response => 
    {
       return new NewTask(response.json());
    }).catch(this.handleError);

  }
  private handleError (error: Response | any) 
  {
    console.error('TaskApiService::handleError', error);
    return Observable.throw(error);
  }

}
