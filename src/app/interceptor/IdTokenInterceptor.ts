import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {MyAuthService, Session} from '../service/my-auth.service';

@Injectable()
export class IdTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const session = localStorage.getObject(MyAuthService.sessionKey) as Session;

    if (session) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${session.idToken}`
        }
      });
    }

    return next.handle(request);
  }
}
