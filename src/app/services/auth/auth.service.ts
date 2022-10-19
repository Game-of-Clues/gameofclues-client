import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment} from '../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = environment.apiUrl + 'login'
  private registerPath = environment.apiUrl + 'register'
  constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }

  login(data: any): Observable<any> {
    return this.http.post(this.loginPath, data)
  }

  logout() {
    this.cookies.delete('auth');

    this.router.navigate(['/']);
  }

  register(data: any): Observable<any> {
    return this.http.post(this.registerPath, data)
  }

  saveToken(token: any) {
    console.log(token);
    document.cookie = `auth=${token}`;
  }

  getToken() {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `auth=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  isAuthenticated() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }
}
