import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
// import { AgmCoreModule } from '@agm/core';

// Components
import { NavDashboardComponent } from './components/navs/nav-dashboard/nav-dashboard.component';
import { HeaderDashboardComponent } from './components/navs/header-dashboard/header-dashboard.component';
// import { DashboardRoutingModule } from '../pages/dashboard/dashboard-routing.module';
import { HomeRoutingModule } from '../pages/home/home-routing.module';

import { SidebarSolicitudesComponent } from './components/sidebar-solicitudes/sidebar-solicitudes.component';
import { ImgUploadComponent } from './components/img-upload/img-upload.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { LayoutComponent } from './components/layouts/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NavDashboardComponent,
    NavbarComponent,
    HeaderDashboardComponent,
    SidebarSolicitudesComponent,
    ImgUploadComponent,
    MapaComponent,
    LayoutComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
    // DashboardRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyB7Qa4w4Y44p9MTyDsbnG_U3BCZo4Z53lM'
    // })
  ],
  exports: [
    NavDashboardComponent,
    HeaderDashboardComponent,
    SidebarSolicitudesComponent,
    MapaComponent,
    ImgUploadComponent,
    LayoutComponent

  ]
})
export class SharedModule { }
