import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SignupComponent } from './signup.component';

const routes : Route[] = [
  {
    path : '',
    component : SignupComponent
  }
]

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignModule { }
