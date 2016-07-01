import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { APP_ROUTER_PROVIDER } from './config/routes';

import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './components/app/app.component';


let providers = [
  APP_ROUTER_PROVIDER,
  HTTP_PROVIDERS,
  AuthService
];

if (process.env.ENV === 'production') {
  enableProdMode();
}
else {
  // providers.push({ provide: XHRBackend, useClass: InMemoryBackendService });
  // providers.push({ provide: SEED_DATA, useClass: InMemoryDataService });
}

bootstrap(AppComponent, providers);
