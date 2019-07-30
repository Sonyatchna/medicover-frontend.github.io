import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { url } from '../../../shared/configs/config';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  registerClient(registerBody) {
    return this.httpClient
      .post(`${url}/auth/register/client`, registerBody)
      .pipe(
        catchError(this._handleError),
        map((res: any) => res)
      );
  }

  registerMedicalStaff(registerBody) {
    return this.httpClient
      .post(`${url}/auth/register/medical-staff`, registerBody)
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
