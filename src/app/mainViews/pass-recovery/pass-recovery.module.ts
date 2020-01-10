import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PassRecoveryComponent } from './pass-recovery.component';

const routes : Route[] = [
  {
    path : '',
    component : PassRecoveryComponent
  }
]

@NgModule({
  declarations: [PassRecoveryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PassRecoveryModule { }
