import { Component, OnInit, inject } from '@angular/core';
import { TodosStore } from './store/todos.store';
import { JsonPipe } from '@angular/common';
import {TodosListComponent} from "./todos-list/todos-list.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'todos',
  standalone: true,
  imports: [JsonPipe, TodosListComponent, MatProgressSpinner],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  store = inject(TodosStore);

  ngOnInit(): void {
    this.loadTodos().then((todos) => {
      console.log('todos loaded', todos);
    });
  }

  async loadTodos() {
    await this.store.loadAll();
  }
}
