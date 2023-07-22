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
  private registedPath = environment.apiUrl + 'auth/register';
  private loginPath = environment.apiUrl + 'auth/login';

  constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }

  register(data: any): Observable<any> {
    return this.http.post(this.registedPath, data);
  }

  login(data: any): Observable<any> {
    console.log(this.loginPath);
    console.log(data);
    return this.http.post(this.loginPath, data);
  }

  logout() {
    this.cookies.delete('auth');
    this.router.navigate(['/']);
  }

  getToken() {
    let cookies = document.cookie.split(';');

    for (let cookie of cookies) {
      console.log(cookie);
      if (cookie.startsWith('auth=')) {
        return cookie.slice(5);
      }
    }

    return '';
  }

  isAuthenticated()
  {
    if(this.getToken())
    {
      return true;
    }
    return false;
  }

  saveToken(token: any) {
    document.cookie = `auth=${token}`;
  }
}
