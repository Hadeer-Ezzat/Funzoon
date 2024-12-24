import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesNameConstants } from './core/constants/app-urls/pages-name.const';
import { RoleGuard } from './guards/role-guard/role.guard';
import { RoleEnum } from './core/enums';
import {
  AuthLayoutComponent,
  DefaultLayoutComponent,
  PoolsLayoutComponent
} from './views/shared/layouts';
import { Page401Component, Page404Component } from './views/shared/pages';
import { DetailsComponent } from './components/app/details/details.component';

const routes: Routes = [
  {
    path: PagesNameConstants.default,
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: PagesNameConstants.empty,
        pathMatch: 'full',
        loadChildren: () =>
          import('./views/home/home.module').then((m) => m.HomeModule),
      },
    ],
    data: {breadcrumb: ''}
  },
  {
    path: PagesNameConstants.home,
    redirectTo: PagesNameConstants.default,
    pathMatch: 'full',
  },
  {
    path: PagesNameConstants.auth,
    component: AuthLayoutComponent,
    children: [
      {
        path: PagesNameConstants.empty,
        loadChildren: () =>
          import('./views/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
    data: {breadcrumb: ''}
  },
  {
    path: PagesNameConstants.pools,
    component: PoolsLayoutComponent,
    children: [
      {
        path: PagesNameConstants.empty,
        loadChildren: () =>
          import('./views/pools/pools.module').then((m) => m.PoolsModule),
      },
    ],
    data: {breadcrumb: ''}
  },
  {
    path: PagesNameConstants.user,
    component: PoolsLayoutComponent,
    children: [
      {
        path: PagesNameConstants.empty,
        loadChildren: () =>
          import('./views/user/user.module').then((m) => m.UserModule),
      },
    ],
    data: {breadcrumb: ''}
  },
  {
    path: PagesNameConstants.page401,
    component: Page401Component,
    pathMatch: 'full',
  },
  {
    path: PagesNameConstants.any,
    component: Page404Component,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
