import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly url = `http://localhost:3000`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }


  private _handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.error);
  }
}
