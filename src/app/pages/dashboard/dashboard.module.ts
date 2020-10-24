import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DataTablesModule } from 'angular-datatables';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {NgxMatIntlTelInputModule} from 'ngx-mat-intl-tel-input';

import { DashboardComponent } from './home/dashboard.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagosComponent } from './pagos/pagos.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';
import { FormRegisterComponent } from './solicitudes/form-register/form-register.component';
import { TableUsersComponent } from './usuarios/table-users/table-users.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SolicitudesComponent,
    UsuariosComponent,
    PagosComponent,
    AfiliadosComponent,
    FormRegisterComponent,
    TableUsersComponent,
    NewUsersComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    DataTablesModule,
    NgxIntlTelInputModule,
    NgxMatIntlTelInputModule,
    MaterialModule
  ]
})
export class DashboardModule { }
