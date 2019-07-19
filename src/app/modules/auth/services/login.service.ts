import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { url, httpOptions } from '../../../../config';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(loginBody) {
    return this.httpClient
      .post(`${url}/auth/login`, loginBody, httpOptions)
      .pipe(
        catchError(this._handleError),
        map((res: any) => res)
      );
  }

  private _handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.error);
  }
}
