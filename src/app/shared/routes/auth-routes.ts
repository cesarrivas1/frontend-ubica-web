import { Routes } from '@angular/router';

export const authContent: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../auth/auth.module').then(
        (m) => m.AuthModule
      ),
  }
];
