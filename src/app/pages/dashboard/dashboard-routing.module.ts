import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './home/dashboard.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagosComponent } from './pagos/pagos.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';

const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'solicitudes',
        component: SolicitudesComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'pagos',
        component: PagosComponent
      },
      {
        path: 'afiliados',
        component: AfiliadosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
