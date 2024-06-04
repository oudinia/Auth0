import { Component, OnInit, inject } from '@angular/core';
import { TodosStore } from '../../store/todos.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'todos',
  standalone: true,
  imports: [JsonPipe],
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
