import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../services/token/token.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, APIResponse} from '../../core/models';
import { UrlsConstants } from 'src/app/core/constants';
import { UserLoginDto, UserLoginResultDto } from 'src/app/core/dtos'
import { ResponseCodeEnum, ResponseCodeTypeEnum, RoleEnum } from 'src/app/core/enums';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService) { }

  signInNewUser(userLoginDto: UserLoginDto): Observable<APIResponse<UserLoginResultDto>>{    
    return this.httpClient.post<APIResponse<UserLoginResultDto>>(UrlsConstants.signIn, userLoginDto).pipe(
      map(response => {
        if(response.isSucceeded){          
          this.tokenService.saveToken(response.result.token)
        }
        return response
      })
    )
  }

  signOutCurrentUser(){
    this.httpClient.post(UrlsConstants.signOut, null).subscribe({
      next: success => {
        this.tokenService.deleteToken()
      },
      error: err => console.error(`signOutCurrentUser: ${err}`)
    })
  }

  isLoggedIn(): Observable<APIResponse<boolean>>{
    if(!this.tokenService.isTokenExist()){
        var response = new APIResponse<boolean>()
        response.codeType = ResponseCodeTypeEnum.failure
        return of(response)
    }
    return this.httpClient.get<APIResponse<boolean>>(UrlsConstants.isLoggedIn)
  }

  isLoggedIn2(){
    return this.httpClient.get(UrlsConstants.isLoggedIn)
  }

  // isLoggedIn(): boolean{
  //   var _isLoggedIn = false
  //   this.httpClient.get<APIResponse<boolean>>(UrlsConstants.isLoggedIn).pipe(map((response: APIResponse<boolean>) => {
  //     _isLoggedIn = response.isSucceeded
  //   }))
  //   return _isLoggedIn
  // }

  hasRolePrivilege(role: RoleEnum): boolean{

    try {

      if(!this.tokenService.isTokenExist() || !this.user || !this.user.role){
        return false
      }
  
      if(this.user.role == RoleEnum.admin){
        return true
      }
  
      if(this.user.role == RoleEnum.host && (role == RoleEnum.host || role == RoleEnum.user )){
        return true
      }
      
      if(this.user.role == RoleEnum.user && role == RoleEnum.user){
        return true
      }
      
      return false

    } catch (error) {
      console.error(`hasRolePrivilege: ${role}`)
      console.error(error)
      return false
    }
    
  }

  get user():User { return this.tokenService.getUser() }

}








/*
signInNewUser(userLoginDto: UserLoginDto): Observable<APIResponse<UserLoginResultDto>>{    
  return this.httpClient.post<APIResponse<UserLoginResultDto>>(ApiUrlsConstants.signIn, userLoginDto).pipe(
    map(response => {
      // Object.setPrototypeOf(response, APIResponse.prototype);

      if(response.isSucceeded){          
        this.tokenService.saveToken(response.result.token)
      }

      return response
    })
    // ,
    // catchError(err => {
    //   return of<any>(this.responseFactoryService.generateExceptionResponse(ResponseCodeEnum.signInException, null, err))
    // })
  )
}
*/