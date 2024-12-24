import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../components/shared-components.module';
import { 
  DefaultLayoutComponent,
  PoolsLayoutComponent } from '../layouts';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    DefaultLayoutComponent,
    PoolsLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule
  ]
})
export class SharedLayoutsModule { }
