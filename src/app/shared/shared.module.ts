import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavDashboardComponent } from './components/navs/nav-dashboard/nav-dashboard.component';
import { HeaderDashboardComponent } from './components/navs/header-dashboard/header-dashboard.component';
import { DashboardRoutingModule } from '../pages/dashboard/dashboard-routing.module';
import { SidebarSolicitudesComponent } from './components/sidebar-solicitudes/sidebar-solicitudes.component';


@NgModule({
  declarations: [NavDashboardComponent, HeaderDashboardComponent, SidebarSolicitudesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    NavDashboardComponent,
    HeaderDashboardComponent,
    SidebarSolicitudesComponent
  ]
})
export class SharedModule { }
