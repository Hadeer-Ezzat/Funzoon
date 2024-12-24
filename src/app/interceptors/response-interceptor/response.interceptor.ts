import {HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Observable, of} from 'rxjs';
import {catchError, finalize, map, retry} from 'rxjs/operators';
import { ResponseCodeEnum } from 'src/app/core/enums';
import { APIResponse, MessageType, ReturnMessage } from 'src/app/core/models';
import { 
  ResponseFactoryService, 
  NotfoundHandlerService, 
  UnauthorizedHandlerService, 
  NotauthenticatedHandlerService} from '../../services'

@Injectable()
export class ResponseHttpInterceptor implements HttpInterceptor {

    constructor(private responseFactoryService: ResponseFactoryService,
      private toastr: ToastrService,
      private notfoundHandlerService: NotfoundHandlerService,
      private unauthorizedHandlerService: UnauthorizedHandlerService,
      private notauthenticatedHandlerService: NotauthenticatedHandlerService){ }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
      .pipe(
          map(this.convertResponseToUniformedApiResponseFormula),
            
          catchError(this.handleError),

          finalize(this.finalize)
      );        
  }

  private convertResponseToUniformedApiResponseFormula = (response: HttpEvent<any>): HttpEvent<any> => {
    if(response instanceof HttpResponse){       
      Object.setPrototypeOf(response.body, APIResponse.prototype);
      this.showMessagesIfExist(response.body.message)
    }
    return response
  }

  private handleError = (error: any): Observable<HttpEvent<any>> => {
    const logMsg = `FUNZOON FAILURE RESPONSE: ${JSON.stringify(error.message)}`;
    console.error(logMsg);

    // if(error instanceof HttpErrorResponse){       
    //   if (error.status === 401) {
    //     return this.notauthenticatedHandlerService.handleNotAuthenticatedError(error)
    //   }
    //   else if (error.status === 403){
    //     return this.unauthorizedHandlerService.handleUnAuthorizedError(error)
    //   }
    //   else if (error.status === 404){
    //     return this.notfoundHandlerService.handleNotFoundError(error)
    //   }
    // }

    const apiErrorResponse = this.responseFactoryService.generateExceptionResponse(ResponseCodeEnum.requestInterceptorException, null, error)    
    var resp = new HttpResponse({status: 200, body: apiErrorResponse})

    return of(resp)
  }  

  private finalize = () => {}

  private showMessagesIfExist(returnMessage: ReturnMessage){
    if( !returnMessage.showMessage || !returnMessage.messages ) {
      return
    }

    returnMessage.messages.forEach(message => {

      if(returnMessage.messageType == MessageType.Success){
        this.toastr.success(message, returnMessage.title, {
          timeOut: 3000
        });
      }
      else if(returnMessage.messageType == MessageType.Error || returnMessage.messageType == MessageType.Exception){
        this.toastr.error(message, returnMessage.title, {
          timeOut: 3000
        });
      }
      else if(returnMessage.messageType == MessageType.Info){
        this.toastr.info(message, returnMessage.title, {
          timeOut: 3000
        });
      }
      // else if(returnMessage.messageType == MessageType.Exception){
      //   this.toastr.error(message, returnMessage.title, {
      //     timeOut: 3000
      //   });
      // }
      else if(returnMessage.messageType == MessageType.Warning){
        this.toastr.warning(message, returnMessage.title, {
          timeOut: 3000
        });
      }
      else {
        this.toastr.error(message, returnMessage.title, {
          timeOut: 3000
        });
      }

    });

  }
}
