import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Todo } from '../model/todo.model';
import { inject } from '@angular/core';
import { TodosService } from '../services/todos.service';

export type TodosFilter = 'All' | 'Active' | 'Completed';

type TodosState = {
  todos: Todo[];
  loading: boolean;
  filter: TodosFilter;
};

const initialState: TodosState = {
  todos: [],
  loading: false,
  filter: 'All',
};

export const TodosStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, todosService = inject(TodosService)) => ({
    async loadAll() {
      patchState(store, { loading: true });
      const todos = await todosService.getTodos();
      patchState(store, { todos: todos });
      patchState(store, { loading: false });
    },
  }))
);
