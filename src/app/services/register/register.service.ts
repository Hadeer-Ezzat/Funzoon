import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserRegisterDto, UserRegisterResultDto } from 'src/app/core/dtos';
import { UrlsConstants } from 'src/app/core/constants'
import { HttpClient } from '@angular/common/http';
import { APIResponse } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(userRegisterDto: UserRegisterDto): Observable<APIResponse<UserRegisterResultDto>>{    
    return this.httpClient.post<APIResponse<UserRegisterResultDto>>(UrlsConstants.register, userRegisterDto)
  }

}
