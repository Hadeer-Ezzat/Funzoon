import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  FooterComponent,
  PaginationComponent,
  FormControlErrorComponent,
  AttachmentsComponent,
  CalendarComponent,
  PaymentComponent,
  FindPoolsComponent,
  ModalsComponent,
  GridListSwitcherComponent,
  FileUploaderWithTableControlComponent,
  BreadcrumbComponent
} from '../components';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { FileUploadModule  } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { CalendarHostComponent } from './calendar-host/calendar-host.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';

const SharedComponents = [
  HeaderComponent,
  FooterComponent,
  PaginationComponent,
  FormControlErrorComponent,
  AttachmentsComponent,
  CalendarComponent,
  PaymentComponent,
  FindPoolsComponent,
  ModalsComponent,
  GridListSwitcherComponent,
  FileUploaderWithTableControlComponent,
  BreadcrumbComponent,
  SpinnerComponent,
  CalendarHostComponent,
  CalendarHeaderComponent,
];

@NgModule({
  declarations: [
    SharedComponents,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatStepperModule,
    MatIconModule,
    ReactiveFormsModule,
    FileUploadModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [
    SharedComponents
  ]
})
export class SharedComponentsModule { }
