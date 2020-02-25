import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class JwtAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('jwtAuthString')) {
       req = req.clone({
        setHeaders: {
          Authorization: localStorage.getItem('jwtAuthString')
        }
      })
    }
    return next.handle(req);
  } 
}
