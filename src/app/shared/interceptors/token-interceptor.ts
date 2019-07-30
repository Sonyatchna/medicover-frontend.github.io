import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authorizationService: AuthorizationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authorizationService.$userToken.value;
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });
    }
    return next.handle(request);
  }

}
