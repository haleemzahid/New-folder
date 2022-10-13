import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpMethodComponent } from './otp-method/otp-method.component';
import { PasswordRecoveryComponent } from './password-recovery.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

const routes: Routes = [
  { path: '', component: PasswordRecoveryComponent },
  { path: 'reset-password', component: PasswordResetComponent},
  { path: 'otp-reset', component: OtpMethodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRecoveryRoutingModule { }
