import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { ToDo } from '../todo.model';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todos: ToDo[] = [];

  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todoService.getToDos().subscribe((items: ToDo[]) => {
      this.todos = items;
    });
  }

  onDeleteToDo(id: number) {
    this.todoService.deleteToDo(id);
  }

  onToggleToDo(id: number) {
    this.todoService.toggleToDo(id);
  }
}
