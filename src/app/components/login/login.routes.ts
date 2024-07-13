// src/app/components/login/login.routes.ts
import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./login.component').then(m => m.LoginComponent)
  }
] as Route[];
