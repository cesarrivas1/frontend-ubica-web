import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavDashboardComponent } from './components/navs/nav-dashboard/nav-dashboard.component';


@NgModule({
  declarations: [NavDashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavDashboardComponent
  ]
})
export class SharedModule { }
