import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesNameConstants } from 'src/app/core/constants/app-urls/pages-name.const';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: PagesNameConstants.empty,
    redirectTo: PagesNameConstants.login,
    pathMatch: 'full'
  },
  { 
    path: PagesNameConstants.login, 
    component: LoginComponent 
  },
  { 
    path: PagesNameConstants.register, 
    component: RegisterComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
