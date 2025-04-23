import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo!: ToDo;

  @Output() onToggle = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();
}
