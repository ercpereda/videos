import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import '../../../public/css/styles.css';

import { VideosService } from '../../services/videos.service';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  providers: [
    VideosService
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
