import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/* export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` }});
  }
  return next(req);
}; */
//Older approach
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('jwt');
    if (token) {
      req = req.clone({ setHeaders: { Authorization: `Bearer ${token}`} });
    }
    return next.handle(req);
  }
  
}