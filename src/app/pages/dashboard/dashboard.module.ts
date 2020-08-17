import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { DashboardComponent } from './home/dashboard.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagosComponent } from './pagos/pagos.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SolicitudesComponent,
    UsuariosComponent,
    PagosComponent,
    AfiliadosComponent],
    
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
