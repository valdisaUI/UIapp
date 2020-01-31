import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SignModule { }
