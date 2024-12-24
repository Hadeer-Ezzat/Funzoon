import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UrlTreesConstants } from 'src/app/core/constants/app-urls/url-trees.const';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedHandlerService {

  constructor(private router: Router) { }

  handleUnAuthorizedError(err: HttpErrorResponse): Observable<any> {
    //navigate /delete cookies or whatever
    this.router.navigateByUrl(UrlTreesConstants.home);

    return of(err.message);
  }
  
  redirectToUnAuthorizedPage(){
    this.router.navigateByUrl(UrlTreesConstants.home);
  }
}
