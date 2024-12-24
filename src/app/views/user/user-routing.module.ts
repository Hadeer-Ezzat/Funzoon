import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesNameConstants } from 'src/app/core/constants/app-urls/pages-name.const';
import { UserGuard } from 'src/app/guards';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: PagesNameConstants.empty,
    redirectTo: PagesNameConstants.profile,
    pathMatch: 'full'
  },
  {
    path: PagesNameConstants.profile,
    component: ProfileComponent,
    data: {breadcrumb: 'Profile'},
    // canActivate: [UserGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
