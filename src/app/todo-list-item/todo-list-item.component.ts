import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() todo: Task;

  @Output()
  remove: EventEmitter<Task> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Task> = new EventEmitter();

  constructor() {
  }

  toggleTodoComplete(todo: Task) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Task) {
    this.remove.emit(todo);
  }

}
