import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';

// Routes
import { content } from './shared/routes/home-routes';

// Components
import { LoginComponent } from './auth/login/login.component';

// {
const routes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
    },
    // {
    //   path: '**',
    //   redirectTo: '/home',
    //   pathMatch: 'full',
    // },
    {
      path: '',
      component: HomeComponent,
      children: content,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
