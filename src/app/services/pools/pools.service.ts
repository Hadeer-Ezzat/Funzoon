import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsConstants } from 'src/app/core/constants';
import { FindPoolMoreDetailsDto, PageData, PoolCardPreviewDto, PoolDto } from 'src/app/core/dtos';
import { APIResponse } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class PoolsService {

  constructor(private httpClient: HttpClient) { }
  
  createPool(poolDto: PoolDto): Observable<APIResponse<PoolDto>>{    
    return this.httpClient.post<APIResponse<PoolDto>>(UrlsConstants.createPool, poolDto)
  }

  getAllPools(): Observable<APIResponse<PoolCardPreviewDto[]>>{    
    return this.httpClient.get<APIResponse<PoolCardPreviewDto[]>>(UrlsConstants.allPools)
  }

  getPoolsAtPage(pageNumber: number): Observable<APIResponse<PageData<PoolCardPreviewDto>>>{    
    const params = new HttpParams().set('pageNumber', `${pageNumber}`)
    return this.httpClient.get<APIResponse<PageData<PoolCardPreviewDto>>>(UrlsConstants.poolsAtPage, {params: params})
  }

  getMyPools(): Observable<APIResponse<PoolCardPreviewDto[]>>{
    return this.httpClient.get<APIResponse<PoolCardPreviewDto[]>>(UrlsConstants.myPools)
  }

  getMyPoolsAtPage(): Observable<APIResponse<PoolCardPreviewDto[]>>{
    return this.httpClient.get<APIResponse<PoolCardPreviewDto[]>>(UrlsConstants.myPoolsAtPage)
  }

  uploadCoverImage(formdata: FormData){
    return this.httpClient.post<APIResponse<string>>(UrlsConstants.fileUpload, formdata)
  }

  getPoolDetailsInFindPools(poolId): Observable<APIResponse<FindPoolMoreDetailsDto>>{    
    const params = new HttpParams().set('poolId', poolId)
    return this.httpClient.get<APIResponse<FindPoolMoreDetailsDto>>(UrlsConstants.poolDetailsInFindPools, {params})
  }
}
