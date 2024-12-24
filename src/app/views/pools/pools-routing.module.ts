import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesNameConstants } from 'src/app/core/constants/app-urls/pages-name.const';
import { MyPoolsComponent } from './my-pools/my-pools.component';
import { PoolWizardComponent } from './pool-wizard/pool-wizard.component';
import { FindPoolComponent } from './find-pool/find-pool.component';
import { FindPoolMoreDetailsComponent } from './find-pool-more-details/find-pool-more-details.component';
import { RoleGuard } from 'src/app/guards/role-guard/role.guard';
import { HostGuard, UserGuard } from 'src/app/guards';
import { Page404Component } from '../shared/pages';


const routes: Routes = [
  {
    path: PagesNameConstants.empty,
    redirectTo: PagesNameConstants.myPools,
    pathMatch: 'full'
  },
  {
    path: PagesNameConstants.myPools,
    data: {breadcrumb: 'My Pools'},
    children:
    [
      {
        path: '',
        component: MyPoolsComponent,
        // canActivate: [HostGuard]
        // canActivate: [UserGuard],
      },
      {
        path: PagesNameConstants.addPool,
        component: PoolWizardComponent,
        data: {breadcrumb: 'Add Pool'},
        // canActivate: [HostGuard]
        // canActivate: [UserGuard]
      },
      {
        path: PagesNameConstants.editPool,
        component: PoolWizardComponent,
        data: {breadcrumb: 'Edit Pool'},
        // canActivate: [HostGuard]
        // canActivate: [UserGuard]
      },
      {
        path: `${PagesNameConstants.myPoolsMoreDetails}/:${PagesNameConstants.idParameter}`,
        component: FindPoolMoreDetailsComponent,
        data: {breadcrumb: 'Pool Details'},
        // canActivate: [HostGuard]
        // canActivate: [UserGuard]
      }
    ]
  },
  {
    path: PagesNameConstants.findPool,
    data: {breadcrumb: 'Find A Pool'},
    children:
    [
      {
        path: '',
        component: FindPoolComponent,
      },
      {
        path: `${PagesNameConstants.findPoolMoreDetails}/:${PagesNameConstants.idParameter}`,
        component: FindPoolMoreDetailsComponent,
        data: {breadcrumb: 'Pool Details'},
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoolsRoutingModule { }
