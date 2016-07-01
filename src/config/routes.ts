import { provideRouter, RouterConfig } from '@angular/router';

import { AuthGuard } from '../tools/auth-guard.ts';

import { HomeComponent } from '../components/home/home.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { VideoDetailComponent } from '../components/video-detail/video-detail.component';

export const appRoutes: RouterConfig = [
  { path: '', component: HomeComponent, terminal: true },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'video/:id', component: VideoDetailComponent, canActivate: [AuthGuard] },
];

export const APP_ROUTER_PROVIDER = [
  provideRouter(appRoutes),
  AuthGuard
];
