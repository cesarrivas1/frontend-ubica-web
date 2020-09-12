import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';


import { DashboardComponent } from './home/dashboard.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagosComponent } from './pagos/pagos.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';
import { FormRegisterComponent } from './solicitudes/form-register/form-register.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SolicitudesComponent,
    UsuariosComponent,
    PagosComponent,
    AfiliadosComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
