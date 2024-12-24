import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsNavigationComponent } from './user-details-navigation/user-details-navigation.component';
import { UserDetailsProfileComponent } from './user-details-profile/user-details-profile.component';
import { UserDetailsPaymentsComponent } from './user-details-payments/user-details-payments.component';
import { UserDetailsNotificationsComponent } from './user-details-notifications/user-details-notifications.component';
import { UserDetailsFavoritesComponent } from './user-details-favorites/user-details-favorites.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    UserDetailsNavigationComponent,
    UserDetailsProfileComponent,
    UserDetailsPaymentsComponent,
    UserDetailsNotificationsComponent,
    UserDetailsFavoritesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }
