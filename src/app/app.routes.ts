// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadComponent: () => import('./components/welcome/welcome.component').then(m => m.WelcomeComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'todos',
    loadComponent: () => import('./components/todos/todos.component').then(m => m.TodosComponent)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.routes').then(m => m.default)
  },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];
