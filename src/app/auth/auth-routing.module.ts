import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { ResetPasswordComponent } from './reset-password/form-reset.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'recovery',
    component: RecoveryPasswordComponent
  },
  {
    path: 'recovery/:email',
    component: RecoveryPasswordComponent
  },
  {
    path: 'reset',
    component: ResetPasswordComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
