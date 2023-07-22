import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(public authService: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(this.authService.getToken());
    request = request.clone({
      setHeaders: {
        Authorization: `${this.authService.getToken()}`
      }
    });
    console.log(request);
    return next.handle(request);
  }
}
