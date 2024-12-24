import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UrlTreesConstants } from 'src/app/core/constants/app-urls/url-trees.const';

@Injectable({
  providedIn: 'root'
})
export class NotfoundHandlerService {

  constructor(private router: Router) { }

  handleNotFoundError(err: HttpErrorResponse): Observable<any> {
    this.router.navigateByUrl(UrlTreesConstants.notfound);

    return of(err.message);
  }

}
