import { Routes } from '@angular/router';

export const dashboardContent: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  }
];
