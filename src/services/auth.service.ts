import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private loggedIn = false;
  private storageKey = 'vpa_sessionid';

  constructor(private http: Http) {}

  login(username: string, password: string): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
        .post(
          '/user/auth',
          JSON.stringify({ 'username': username, 'password': password }),
          {headers}
        )
        .map((res: Response) => res.json())
        .map(res => {
          if (res.status === 'success') {
            this.loggedIn = true;
            localStorage.setItem(this.storageKey, res.sessionId)
          }
        });
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  sessionId() {
    return localStorage.getItem(this.storageKey);
  }
}
