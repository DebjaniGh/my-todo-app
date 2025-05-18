import { Injectable } from '@angular/core';
import { ToDo } from '../components/todo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // todo[] should be a BehabiorSubject to reflect deletion, toggle of the todo
  private todos = new BehaviorSubject<ToDo[]>([
    // sample todos
    { id: 1, description: 'Buy groceries', completed: false },
    { id: 2, description: 'Walk the dog', completed: false },
    { id: 3, description: 'Finish homework', completed: false },
    { id: 4, description: 'Call mom', completed: false },
    { id: 5, description: 'Read a book', completed: false },
  ]);
  constructor() {}

  getToDos() {
    return this.todos.asObservable();
  }

  addToDo(title: string) {
    const currToDos = this.todos.value;
    const newToDo: ToDo = {
      id: currToDos[currToDos.length - 1].id + 1,
      description: title,
      completed: false,
    };

    this.todos.next([...currToDos, newToDo]);
  }

  // change the status of task from completed to not completed
  toggleToDo(id: number) {
    const currentToDos = this.todos.value;
    const updatedTodos = currentToDos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.todos.next(updatedTodos); // let to-list know there has been a change in the todos[]
  }

  deleteToDo(id: number) {
    const currentToDos = this.todos.value;
    const toDosAfterDelete = currentToDos.filter((t) => t.id !== id);
    this.todos.next(toDosAfterDelete); // let to-list know there has been a change in the todos[]
  }
}
