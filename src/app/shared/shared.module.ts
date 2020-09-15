import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

// Components
import { NavDashboardComponent } from './components/navs/nav-dashboard/nav-dashboard.component';
import { HeaderDashboardComponent } from './components/navs/header-dashboard/header-dashboard.component';
import { HomeRoutingModule } from '../pages/home/home-routing.module';

import { SidebarSolicitudesComponent } from './components/sidebar-solicitudes/sidebar-solicitudes.component';
import { ImgUploadComponent } from './components/img-upload/img-upload.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { LayoutComponent } from './components/layouts/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';


@NgModule({
  declarations: [
    NavDashboardComponent,
    NavbarComponent,
    HeaderDashboardComponent,
    SidebarSolicitudesComponent,
    ImgUploadComponent,
    MapaComponent,
    LayoutComponent,
    FooterComponent,
    ImageUploadComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7Qa4w4Y44p9MTyDsbnG_U3BCZo4Z53lM'
    }),
    GooglePlaceModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule

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
