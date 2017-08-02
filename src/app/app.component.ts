import { Component,OnInit } from '@angular/core';

import {TodoDataService} from './todo-data.service';
import {NewTask} from './todo'; 

//import {LoggingService} from './loggin.service';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService],
})


export class AppComponent implements OnInit
{ 
  constructor(private privateMember: TodoDataService) 
  {
  }
  
  tasks:NewTask[] = [];

  public ngOnInit()
  {
    this.privateMember.getAllTasks().subscribe((tempVar) => 
    {
      this.tasks = tempVar;
    });
  }

}
