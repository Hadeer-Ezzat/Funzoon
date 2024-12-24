import { Injectable } from '@angular/core';
import { APIResponseConstMessages } from '../../core/constants';
import { ResponseCodeEnum, ResponseCodeTypeEnum } from '../../core/enums';
import { APIResponse, MessageType, ReturnMessage } from '../../core/models';

@Injectable({
  providedIn: 'root'
})
export class ResponseFactoryService {

  constructor() { }

  public generateExceptionResponse(code: ResponseCodeEnum, message?: ReturnMessage, result?: any): APIResponse<any>{
    var response = new APIResponse<any>()
        response.code = code
        response.codeType = ResponseCodeTypeEnum.unHandledException
        response.message = message ?? this.generateExceptionReturnMessage()
        response.result = result ?? null

    return response
  }

  private generateExceptionReturnMessage(): ReturnMessage {
    const exceptionReturnMessage: ReturnMessage = {
      title: "",
      messages: [APIResponseConstMessages.somethingWentWrong],
      messageType: MessageType.Exception,
      showMessage: false
    }
    
    return exceptionReturnMessage;
  }
}
