import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page404Component } from '../pages';
import { Page401Component } from './page401/page401.component';

const SharedComponents = [
  Page404Component,
  Page401Component
]

@NgModule({
  declarations: [
    SharedComponents
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SharedComponents
  ]
})
export class SharedPagesModule { }
