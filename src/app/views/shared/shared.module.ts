import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/shared-components.module';
import { SharedLayoutsModule } from './layouts/shared-layouts.module';
import { SharedPagesModule } from './pages/shared-pages.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedLayoutsModule,
    SharedComponentsModule,
    SharedPagesModule
  ]
})
export class SharedModule { }
