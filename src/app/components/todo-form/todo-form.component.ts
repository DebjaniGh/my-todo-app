import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  newTask = '';

  constructor(private todoService: TodoService) {}

  addToDo() {
    if (this.newTask.trim()) {
      this.todoService.addToDo(this.newTask);
      this.newTask = '';
    }
  }
}
