import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UrlTreesConstants } from 'src/app/core/constants/app-urls/url-trees.const';
import { RoleEnum } from 'src/app/core/enums';
import { CurrentUserService, NotauthenticatedHandlerService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})
export class HostGuard implements CanActivate {
  constructor( private router: Router,
    private currentUserService: CurrentUserService,
    private notauthenticatedHandlerService: NotauthenticatedHandlerService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | Observable<boolean> | boolean | UrlTree {
    
      try {
        return this.currentUserService.isLoggedIn().pipe(switchMap(response => {

          if(!response.isSucceeded || !this.currentUserService.user.role){
            return this.router.navigateByUrl(UrlTreesConstants.login)
          } 

          if(this.currentUserService.hasRolePrivilege(RoleEnum.host)){
            return of(true)
          }

          return this.router.navigateByUrl(UrlTreesConstants.unauthorized)
        }))
        
      } catch (error) {
        console.error('canActivate: HostGuard')
        console.error(error);
        return false
      }
  }
}
