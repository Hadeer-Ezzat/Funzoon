import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsConstants } from 'src/app/core/constants';
import { UserProfileDto } from 'src/app/core/dtos';
import { APIResponse } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserProfile(userId): Observable<APIResponse<UserProfileDto>>{    
    const params = new HttpParams().set('userId', userId)
    return this.httpClient.get<APIResponse<UserProfileDto>>(UrlsConstants.userProfile, {params})
  }

  updateUserProfile(userProfile: UserProfileDto): Observable<APIResponse<UserProfileDto>>{    
    return this.httpClient.put<APIResponse<UserProfileDto>>(UrlsConstants.updateUserProfile, userProfile)
  }

  updateUserProfileImage(attachment: FormData){
    return this.httpClient.put<APIResponse<boolean>>(UrlsConstants.updateImageProfile, attachment)
  }
}
