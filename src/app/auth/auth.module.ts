import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxSpinnerModule } from 'ngx-spinner';

// Google Map
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';

// Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Component's
import { LoginComponent } from './login/login.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { FormEmailComponent } from './recovery-password/form-email/form-email.component';
import { FormConfirmComponent } from './recovery-password/form-confirm/form-confirm.component';
import { ResetPasswordComponent } from './reset-password/form-reset.component';
import { RegisterComponent } from './register/register.component';
// import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input/lib/ngx-mat-intl-tel-input.module';
import {NgxMatIntlTelInputModule} from 'ngx-mat-intl-tel-input';
// 

// import { MatButtonModule } from '@angular/material/button';
// import { MatFileUploadModule } from 'angular-material-fileupload';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    LoginComponent,
    RecoveryPasswordComponent,
    FormEmailComponent,
    FormConfirmComponent, 
    ResetPasswordComponent, 
    RegisterComponent
  ],

  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    SharedModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GooglePlaceModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7Qa4w4Y44p9MTyDsbnG_U3BCZo4Z53lM',
      libraries: ['places']
    }),
    NgxIntlTelInputModule,
    NgxMatIntlTelInputModule,
    NgxSpinnerModule,

  ]
})
export class AuthModule { }
