import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../pages/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../../auth/auth.module').then(
        (m) => m.AuthModule
      ),
  }
];
