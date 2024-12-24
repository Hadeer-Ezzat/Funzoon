import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserLoginDto, UserLoginResultDto } from 'src/app/core/dtos';
import { APIResponse } from 'src/app/core/models';
import { CurrentUserService } from '../current-user/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private currentUserService: CurrentUserService) { }

  logIn(userLoginDto: UserLoginDto): Observable<APIResponse<UserLoginResultDto>>{
    return this.currentUserService.signInNewUser(userLoginDto)
  }

}
