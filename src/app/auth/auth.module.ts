import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { FormEmailComponent } from './recovery-password/form-email/form-email.component';
import { FormConfirmComponent } from './recovery-password/form-confirm/form-confirm.component';
import { ResetPasswordComponent } from './reset-password/form-reset.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecoveryPasswordComponent,
    FormEmailComponent,
    FormConfirmComponent, 
    ResetPasswordComponent, RegisterComponent
  ],

  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    SharedModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule

  ]
})
export class AuthModule { }
