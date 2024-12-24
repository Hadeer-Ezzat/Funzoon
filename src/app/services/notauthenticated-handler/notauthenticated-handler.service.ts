import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UrlTreesConstants } from 'src/app/core/constants/app-urls/url-trees.const';

@Injectable({
  providedIn: 'root'
})
export class NotauthenticatedHandlerService {

  constructor(private router: Router) { }

  handleNotAuthenticatedError(err: HttpErrorResponse): Observable<any> {
    //navigate /delete cookies or whatever
    this.router.navigateByUrl(UrlTreesConstants.login);

    return of(err.message);
  }

  redirectToNotAuthenticatedPage(){
    this.router.navigateByUrl(UrlTreesConstants.login);
  }
}
