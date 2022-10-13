import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule),
    data: {  showTopBar: false }
  },
  {
    path: 'authentication',
    loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule),
    data: {  showTopBar: false }
  },
  {
    path: 'password-recovery',
    loadChildren: () => import('./views/password-recovery/password-recovery.module').then(m => m.PasswordRecoveryModule),
    data: {  showTopBar: false }
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    data: {  showTopBar: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
