import {
    it,
    describe,
    expect,
    inject,
    beforeEach,
    beforeEachProviders
} from '@angular/core/testing';

import { provide } from '@angular/core';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AuthService } from './auth.service';

describe('login', () => {
    let service: AuthService, mockbackend: MockBackend;

    beforeEachProviders(() => [
        AuthService,
        MockBackend,
        BaseRequestOptions,
        provide(Http, {
            useFactory: (backend: any, options: any) => new Http(backend, options),
            deps: [MockBackend, BaseRequestOptions]
        })
    ])

    beforeEach(inject([MockBackend, AuthService], (m: MockBackend, s: AuthService) => {
        mockbackend = m;
        service = s;
    }));

    it('can login with valid credential', () => {
        let response = { status: 'success' };
        let responseOptions = new ResponseOptions();
        responseOptions.status = 200;
        responseOptions.body = JSON.stringify(response);

        mockbackend.connections.subscribe((connection: any) => {
            return connection.mockRespond(new Response(responseOptions));
        });

        // service.login('ali', 'password').subscribe((x: any) => {
        //     expect(true).toEqual(true);
        // });
    });
});
