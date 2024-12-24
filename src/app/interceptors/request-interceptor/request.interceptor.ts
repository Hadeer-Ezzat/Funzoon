import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {catchError, finalize, retry} from 'rxjs/operators';
import { ResponseCodeEnum } from 'src/app/core/enums';
import { APIResponse } from 'src/app/core/models';
import {TokenService , ResponseFactoryService, NotfoundHandlerService, UnauthorizedHandlerService, NotauthenticatedHandlerService} from '../../services'

@Injectable()
export class RequestHttpInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService,
    private responseFactoryService: ResponseFactoryService,
    private notfoundHandlerService: NotfoundHandlerService,
    private unauthorizedHandlerService: UnauthorizedHandlerService,
    private notauthenticatedHandlerService: NotauthenticatedHandlerService){ }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.tokenService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(req)
      .pipe(
        // Retry on failure
        retry(2),

        catchError(this.handleError),

        finalize(this.finalize)
      );
  }

  handleError = (error: any): Observable<HttpEvent<any>> => {
    const logMsg = `FUNZOON FAILURE REQUEST: ${JSON.stringify(error.message)}`;
    console.error(logMsg);

    const apiErrorResponse = this.responseFactoryService.generateExceptionResponse(ResponseCodeEnum.requestInterceptorException, null, error)    
    var resp = new HttpResponse({status: 200, body: apiErrorResponse})

    return of(resp)
  }

  finalize = () => {}
}