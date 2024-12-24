import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesNameConstants } from 'src/app/core/constants/app-urls/pages-name.const';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: PagesNameConstants.empty, 
    component: HomeComponent 
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
