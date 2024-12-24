import { Injectable } from '@angular/core';
import { APIResponse } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class UnsucceedResponseHandlerService {

  constructor() { }

  handleUnsucceedResponse(response: APIResponse<any>){
    if(response.isUnHandledException){
      // handling unhandled exception. back-end exception.
    }else if(response.isException){
      // handling exception. front-end exception.
    }else if(response.isFailure){
      // handling failure.
    }
  }
}
