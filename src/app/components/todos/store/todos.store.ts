import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {Todo} from '../model/todo.model';
import {computed, inject} from '@angular/core';
import {TodosService} from '../service/todos.service';

export type TodosFilter = 'all' | 'active' | 'completed';

type TodosState = {
  todos: Todo[];
  loading: boolean;
  searchFilter: TodosFilter;
};

const initialState: TodosState = {
  todos: [],
  loading: false,
  searchFilter: 'all',
};

export const TodosStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods((store, todosService = inject(TodosService)) => ({
    async loadAll() {
      patchState(store, {loading: true});
      const todos = await todosService.getTodos();
      patchState(store, {todos: todos});
      patchState(store, {loading: false});
    },

    async addTodo(title: string) {
      const todo = await todosService.addTodo({title: title, completed: false});
      patchState(store, (state) => ({
        todos: [...state.todos, todo]
      }))
    },

    async delteTodo(id: string) {
      await todosService.deleteTodo(id);

      patchState(store, (state) => ({
        todos: state.todos.filter(todo => todo.id !== id),
      }))
    },

    async updateTodo(id: string, completed: boolean) {
      await todosService.updateTodo(id, completed);

      patchState(store, (state) => ({
        todos: state.todos.map(todo => todo.id === id ? {...todo, completed} : todo),
      }))
    },

    updateFilter(filter: TodosFilter) {
      patchState(store, {searchFilter: filter});
    }
  })),
  withComputed((state) => ({
      filteredTodos: computed(() => {
        const filteredTodos: Todo[] = [];
        const todos = state.todos();
        switch (state.searchFilter()) {
          case 'all':
            return todos;
          case 'active':
            return todos.filter((todo: Todo) => !todo.completed);
          case 'completed':
            return todos.filter((todo: Todo) => todo.completed);
        }
      })
    })
  ))
