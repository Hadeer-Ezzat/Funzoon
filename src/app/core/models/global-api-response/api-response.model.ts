import { ResponseCodeEnum, ResponseCodeTypeEnum } from '../../enums'

export class APIResponse<T>{
    code: ResponseCodeEnum
    codeType: ResponseCodeTypeEnum
    message: ReturnMessage
    result?: T    
    
    get isSucceeded(): boolean {
        return this.codeType == ResponseCodeTypeEnum.success
    }

    get isFailure(): boolean {
        return this.codeType == ResponseCodeTypeEnum.failure
    }

    get isException(): boolean {
        return this.codeType == ResponseCodeTypeEnum.exception
    }

    get isUnHandledException(): boolean {
        return this.codeType == ResponseCodeTypeEnum.unHandledException
    }
}

export interface ReturnMessage {
    title: string
    messages: string[];
    messageType: MessageType;
    showMessage: boolean;
}

export enum MessageType {
    None      = 'none',
    Info      = 'info',
    Warning   = 'warning',
    Error     = 'error',
    Success   = 'success',
    Exception = 'exception'
}