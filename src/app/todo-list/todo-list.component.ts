import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../todo';

@Component(
  {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
  }
)
export class TodoListComponent {

  @Input()
  todos: Task[];

  @Output()
  remove: EventEmitter<Task> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Task> = new EventEmitter();

  constructor() {
  }

  onToggleTodoComplete(todo: Task) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Task) {
    this.remove.emit(todo);
  }

}
