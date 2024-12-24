import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UrlTreesConstants } from 'src/app/core/constants/app-urls/url-trees.const';
import { RoleEnum } from 'src/app/core/enums';
import { CurrentUserService, NotauthenticatedHandlerService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor( private router: Router,
    private currentUserService: CurrentUserService,
    private notauthenticatedHandlerService: NotauthenticatedHandlerService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      try {

        // If user not logged in -> redirect to login page.
        if(!this.currentUserService.isLoggedIn){
          return this.router.parseUrl(UrlTreesConstants.login)
        }
  
        // If user don't have any role -> 
        //    this means that maybe the stored token is corrupted,
        //    therefore -> sign-out current user 
        //    then -> redirect to login page.
        if(!this.currentUserService.user.role){
          this.currentUserService.signOutCurrentUser()
          return this.router.parseUrl(UrlTreesConstants.login)
        }

        let role = route.data.role as RoleEnum;
        return this.currentUserService.hasRolePrivilege(role)
        
      } catch (error) {
        console.error('canActivate: RoleGuard')
        console.error(error);
        return false
      }
      
  }
}
