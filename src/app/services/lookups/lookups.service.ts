import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UrlsConstants } from 'src/app/core/constants';
import { 
  AmenityLookupDto,
  RuleLookupDto,
  PrivacyLookupDto,
  CancelationPolicyLookupDto } from 'src/app/core/dtos';
import { APIResponse } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  constructor(private httpClient: HttpClient) { }

  getAmentitesLookup(): Observable<APIResponse<AmenityLookupDto[]>>{    
    return this.httpClient.get<APIResponse<AmenityLookupDto[]>>(UrlsConstants.amenitiesLookup)
  }

  getRulesLookup(): Observable<APIResponse<RuleLookupDto[]>>{    
    return this.httpClient.get<APIResponse<RuleLookupDto[]>>(UrlsConstants.rulesLookup)
  }

  getPrivaciesLookup(): Observable<APIResponse<PrivacyLookupDto[]>>{    
    return this.httpClient.get<APIResponse<PrivacyLookupDto[]>>(UrlsConstants.privaciesLookup)
  }

  getCancelationPoliciesLookup(): Observable<APIResponse<CancelationPolicyLookupDto[]>>{    
    return this.httpClient.get<APIResponse<CancelationPolicyLookupDto[]>>(UrlsConstants.cancelationPoliciesLookup)
  }

}
