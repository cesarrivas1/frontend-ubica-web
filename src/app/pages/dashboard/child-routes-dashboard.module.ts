import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagosComponent } from './pagos/pagos.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';


const childRoutes: Routes = [
  {
    path: 'solicitudes',
    component: SolicitudesComponent
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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesDashboardModule { }
