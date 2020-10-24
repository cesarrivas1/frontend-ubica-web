import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';

// Routes
import { content } from './shared/routes/home-routes';
import { dashboardContent } from './shared/routes/dashboard-routes';
import { authContent } from './shared/routes/auth-routes';


// Components
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/home/dashboard.component';
import { LayoutComponent } from './shared/components/layouts/layout/layout.component';

// {
const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: LayoutComponent,
      children: content,
    },
    {
      path: 'login',
      component: LoginComponent,
      children: authContent
    },
    { path: 'dashboard/:home',
      component: DashboardComponent,
      children: dashboardContent
    },
    { path: 'dashboard',
      component: DashboardComponent,
      children: dashboardContent
    }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
