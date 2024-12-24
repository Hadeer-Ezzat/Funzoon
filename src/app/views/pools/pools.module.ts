import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolsRoutingModule } from './pools-routing.module';
import { MyPoolsComponent } from './my-pools/my-pools.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { PoolPrivacyComponent } from './pool-privacy/pool-privacy.component';
import { PoolDetailsComponent } from './pool-details/pool-details.component';
import { PoolWizardComponent } from './pool-wizard/pool-wizard.component';
import { PoolSpecificationsComponent } from './pool-specifications/pool-specifications.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { FindPoolComponent } from './find-pool/find-pool.component';
import { PoolListCardComponent } from './pool-list-card/pool-list-card.component';
import { EmptyMyPoolsComponent } from './empty-my-pools/empty-my-pools.component';
import { EmptySearchPoolsComponent } from './empty-search-pools/empty-search-pools.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FindPoolListCardComponent } from './find-pool-list-card/find-pool-list-card.component';
import { FindPoolMoreDetailsComponent } from './find-pool-more-details/find-pool-more-details.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    MyPoolsComponent,
    PoolPrivacyComponent,
    PoolDetailsComponent,
    PoolWizardComponent,
    PoolSpecificationsComponent,
    FindPoolComponent,
    PoolListCardComponent,
    EmptyMyPoolsComponent,
    EmptySearchPoolsComponent,
    FindPoolListCardComponent,
    FindPoolMoreDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    PoolsRoutingModule,
    MatStepperModule,
    MatIconModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    SlickCarouselModule,
    NgxPaginationModule,
    NgwWowModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class PoolsModule { }
