import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRecoveryRoutingModule } from './password-recovery-routing.module';
import { PasswordRecoveryComponent } from './password-recovery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { OtpMethodComponent } from './otp-method/otp-method.component';


@NgModule({
  declarations: [
    PasswordRecoveryComponent,
    PasswordResetComponent,
    OtpMethodComponent
  ],
  imports: [
    CommonModule,
    PasswordRecoveryRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule
  ]
})
export class PasswordRecoveryModule { }
