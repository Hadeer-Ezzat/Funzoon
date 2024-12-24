import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesConstants } from 'src/app/core/constants/app-urls/routes.const';

@Injectable({
  providedIn: 'root'
})
export class AppGlobalRouterService {

  constructor(private router: Router) { }

  navigateToHomePage(){ this.router.navigate([RoutesConstants.home]) }

  navigateToLoginPage(){ this.router.navigate([RoutesConstants.login]) }

  navigateToRegisterPage(){ this.router.navigate([RoutesConstants.register]) }

  navigateToMyPoolsPage(){ this.router.navigate([RoutesConstants.myPools]) }

  navigateToAddPoolPage(){ this.router.navigate([RoutesConstants.addPool]) }

  navigateToFindPoolPage(){ this.router.navigate([RoutesConstants.findPool]) }

  navigateToCurrentUserProfile(){ this.router.navigate([RoutesConstants.currentUserProfile]) }

  navigateToFindPoolMoreDetails(poolId: string){ this.router.navigate([`${RoutesConstants.findPoolMoreDetails}/${poolId}`]) }

  navigateToMyPoolsMoreDetails(poolId: string){ this.router.navigate([`${RoutesConstants.myPoolsMoreDetails}/${poolId}`]) }
}
