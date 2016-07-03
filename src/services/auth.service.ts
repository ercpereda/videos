import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';

let md5 = require('md5');

@Injectable()
export class AuthService {
    private loggedIn = false;
    private storageKey = 'vpa_sessionid';

    constructor(private http: Http) { }

    login(username: string, password: string): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        // let http = this.http
        //     .post(
        //     '/user/auth',
        //     JSON.stringify({ 'username': username, 'password': password }),
        //     { headers });
        // console.log(`@@@@@@ ${JSON.stringify(http)}`);
        //
        // let m1 = http.map((res: Response) => res.json());
        // console.log(`@@@@@@ ${m1}`);
        //
        // let m2 = m1.map(res => {
        //     if (res.status === 'success') {
        //         this.loggedIn = true;
        //         localStorage.setItem(this.storageKey, res.sessionId)
        //     }
        //     return res;
        // });
        // console.log(`@@@@@@@ ${m2}`);
        // return m2;

        return this.http
            .post(
            '/user/auth',
            JSON.stringify({ 'username': username, 'password': md5(password) }),
            { headers })
            .map((res: Response) => res.json())
            .map(res => {
                if (res.status === 'success') {
                    this.loggedIn = true;
                    localStorage.setItem(this.storageKey, res.sessionId)
                }
                return res;
            });
    }

    logout() {
        let params = new URLSearchParams();
        params.set('sessionId', this.sessionId());

        return this.http
            .get(
            '/user/logout',
            { search: params }
            )
            .map((res: Response) => res.json())
            .map(res => {
                console.log(res);
                if (res.status === 'success') {
                    this.loggedIn = false;
                    localStorage.removeItem(this.storageKey);
                }
                return res;
            });
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    sessionId() {
        return localStorage.getItem(this.storageKey);
    }
}
