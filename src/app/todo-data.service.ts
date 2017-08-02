import { Injectable } from '@angular/core';
import { NewTask } from './todo';
import { TaskApiService } from './task-api.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
@Injectable()
export class TodoDataService 
{
  lastId: number = 0;
  tasks: NewTask[] = [];

  constructor(private taskApiObject: TaskApiService) 
  {
  
  }

  // Simulate POST /addNewTask
  addNewTask(todo:NewTask):Observable<NewTask>
  {
  	return this.taskApiObject.addNewTask(todo);
  }

  // Simulate GET /getAllTasks
  getAllTasks():Observable<NewTask[]> 
  {
  	  return this.taskApiObject.getAllTasks();
  }
  
  // Simulate GET /getTaskById
  getTaskById(id:number):NewTask
  {
  	return this.tasks.filter(todo =>todo.id == id).pop()
  }

  // Simulate PUT /task/:id(EDIT)
  updateTaskById(id: number, values: Object = {}): NewTask 
  {
    let newTask = this.getTaskById(id);
    if (!newTask) 
    {
      return null;
    }
    Object.assign(newTask, values);
    return newTask;
  }


  // Simulate DELETE /task/:id
  deleteTaskById(id: number): TodoDataService 
  {
    this.tasks = this.tasks.filter(todo => todo.id !== id);
    return this;
  }


}
