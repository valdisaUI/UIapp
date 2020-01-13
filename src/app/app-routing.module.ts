import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './uiwidgets/components/home/home.component';


const routes: Routes = [
  {
    path : '', 
    component : HomeComponent
  },
  {
    path : 'login', 
    loadChildren : './mainViews/login/login.module#LoginModule'
  },
  {
    path : 'signup',
    loadChildren : './mainViews/signup/signup.module#SignModule'
  },
  {
    path : 'institucional',
    loadChildren : './mainViews/company-signup/company-signup.module#CompanySignupModule'
  },
  {
    path : 'recovery',
    loadChildren : './mainViews/pass-recovery/pass-recovery.module#PassRecoveryModule'
  },
  {
    path : 'termos',
    loadChildren : './mainViews/terms-of-use/terms-of-use.module#TermsOfUseModule'
  },
  {
    path : 'account',
    loadChildren : './mainViews/user-account/user-account.module#UserAccountModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
