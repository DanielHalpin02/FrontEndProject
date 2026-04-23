import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'weight-log',
    loadComponent: () => import('./weight-log/weight-log.page').then(m => m.WeightLogPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];