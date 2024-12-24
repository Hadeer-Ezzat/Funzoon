import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsConstants } from 'src/app/core/constants';
import { APIResponse } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class TestPoolsService {

  constructor(private httpClient: HttpClient) { }

  publicPools(): Observable<APIResponse<string>>{    
    return this.httpClient.get<APIResponse<string>>(UrlsConstants.publicPool)
  }  
  
  userPools(): Observable<APIResponse<string>>{    
    return this.httpClient.get<APIResponse<string>>(UrlsConstants.userPool)
  }

  hostPools(): Observable<APIResponse<string>>{    
    return this.httpClient.get<APIResponse<string>>(UrlsConstants.hostPool)
  }

  adminPools(): Observable<APIResponse<string>>{    
    return this.httpClient.get<APIResponse<string>>(UrlsConstants.adminPool)
  }
  
}
