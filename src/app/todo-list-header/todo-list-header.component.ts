import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

  newTask: Task = new Task();

  @Output()
  add: EventEmitter<Task> = new EventEmitter();

  constructor() {
  }

  addTodo() {
    this.add.emit(this.newTask);
    this.newTask = new Task();
  }

}
