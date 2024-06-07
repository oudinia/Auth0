import {Component, effect, inject, viewChild} from '@angular/core';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {TodosFilter, TodosStore} from "../store/todos.store";
import {JsonPipe, NgStyle} from "@angular/common";
import {AuthenticationService} from "../../../services/autho-service";

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [
    MatButtonToggle,
    MatButtonToggleGroup,
    MatFormField,
    MatLabel,
    MatIcon,
    MatInput,
    MatSelectionList,
    MatSuffix,
    MatListOption,
    JsonPipe,
    NgStyle
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {

  constructor() {
    effect(() => {
      const filter = this.filter();

      filter.value = this.store.searchFilter();
    });
  }

  store = inject(TodosStore);

  filter = viewChild.required(MatButtonToggleGroup);

  async onAddTodo(title: string) {
    await this.store.addTodo(title);
  }


  async onDeleteTodo(id: string, $event: MouseEvent) {
    $event.stopPropagation();
    await this.store.delteTodo(id)
  }

  async onTodoToggled(id: string, completed: boolean) {
    await this.store.updateTodo(id, completed);
  }

  onFilterTodos($event: MatButtonToggleChange) {
    const filter = $event.value as TodosFilter;

    this.store.updateFilter(filter);
  }
}
