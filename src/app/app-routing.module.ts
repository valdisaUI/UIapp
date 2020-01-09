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
    loadChildren : './mainViews/login/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
