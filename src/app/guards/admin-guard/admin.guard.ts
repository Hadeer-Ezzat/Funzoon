import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UrlTreesConstants } from 'src/app/core/constants/app-urls/url-trees.const';
import { RoleEnum } from 'src/app/core/enums';
import { CurrentUserService, NotauthenticatedHandlerService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor( private router: Router,
    private currentUserService: CurrentUserService,
    private notauthenticatedHandlerService: NotauthenticatedHandlerService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      try {

        if(!this.currentUserService.isLoggedIn){
          return this.router.parseUrl(UrlTreesConstants.login)
        }
  
        if(!this.currentUserService.user.role){
          this.currentUserService.signOutCurrentUser()
          return this.router.parseUrl(UrlTreesConstants.login)
        }

        return this.currentUserService.hasRolePrivilege(RoleEnum.admin)
        
      } catch (error) {
        console.error('canActivate: AdminGuard')
        console.error(error);
        return false
      }
      
  }
}
