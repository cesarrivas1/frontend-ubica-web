import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavDashboardComponent } from './components/navs/nav-dashboard/nav-dashboard.component';
import { HeaderDashboardComponent } from './components/navs/header-dashboard/header-dashboard.component';
import { DashboardRoutingModule } from '../pages/dashboard/dashboard-routing.module';


@NgModule({
  declarations: [NavDashboardComponent, HeaderDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    NavDashboardComponent,
    HeaderDashboardComponent
  ]
})
export class SharedModule { }
