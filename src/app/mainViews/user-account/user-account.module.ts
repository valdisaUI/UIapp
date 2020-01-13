import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { UserAccountComponent } from './user-account.component';
import { UIwidgetsModule } from 'src/app/uiwidgets/uiwidgets.module';


const routes : Route[] = [
  {
    path : '',
    component : UserAccountComponent
  }
]

@NgModule({
  declarations: [UserAccountComponent],
  imports: [
    CommonModule,
    UIwidgetsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserAccountModule { }
