import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CompanySignupComponent } from './company-signup.component';


const routes : Route[] = [
  {
    path : '',
    component : CompanySignupComponent
  }
]

@NgModule({
  declarations: [CompanySignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanySignupModule { }
