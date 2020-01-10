import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TermsOfUseComponent } from './terms-of-use.component';


const routes : Route[] = [
  {
    path : '',
    component : TermsOfUseComponent
  }
]

@NgModule({
  declarations: [TermsOfUseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TermsOfUseModule { }
