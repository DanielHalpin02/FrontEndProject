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
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage),
  },
  {
    path: 'workouts',
    loadComponent: () => import('./workouts/workouts.page').then(m => m.WorkoutsPage),
  },
  {
    path: 'workouts/:id',
    loadComponent: () =>
      import('./workout-details/workout-details.page').then(m => m.WorkoutDetailsPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];