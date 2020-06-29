import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoCollectionService } from "./todo-collection.service";
import { Todo } from './state';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  loading$: Observable<boolean>;
  constructor(private todoCollectionService: TodoCollectionService) { 
    this.todos$ = todoCollectionService.entities$;
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoCollectionService.getAll();
  }


}
