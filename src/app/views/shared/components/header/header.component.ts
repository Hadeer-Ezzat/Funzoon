import { Component, OnInit } from '@angular/core';
import { RoleEnum } from 'src/app/core/enums';
import { AppGlobalRouterService, CurrentUserService } from 'src/app/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false
  isHostUser: boolean = false

  constructor(private appGlobalRouterService: AppGlobalRouterService,
    private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    
    this.currentUserService.isLoggedIn().subscribe(response => {
      if(response.isSucceeded){
        this.isUserLoggedIn = true
        this.isHostUser = this.currentUserService.hasRolePrivilege(RoleEnum.host)
      }
    })
    
    // if(this.currentUserService.isLoggedIn()){
    //   this.isUserLoggedIn = true
    //   this.isHostUser = this.currentUserService.hasRolePrivilege(RoleEnum.host)
    // }
  }

  redirectToLogin(){
    this.appGlobalRouterService.navigateToLoginPage()
  }

  redirectToProfile(){
    this.appGlobalRouterService.navigateToCurrentUserProfile()
  }

  logout(){
    this.currentUserService.signOutCurrentUser()
    this.redirectToLogin()
  }

}
