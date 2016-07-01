import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../../models/video';

import { AuthService } from '../../services/auth.service';
import { VideosService } from '../../services/videos.service';

import { VideoItemComponent } from '../video-item/video-item.component';

import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.component.html'),
  styles: [require('./dashboard.component.css')],
  directives: [VideoItemComponent, InfiniteScroll]
})
export class DashboardComponent implements OnInit {
  videos: Video[];

  constructor(
    private router: Router,
    private authService: AuthService,
    private videosService: VideosService
  ) { }

  gotoDetail() {
  }

  ngOnInit() {
    this.videosService.getVideos()
      .subscribe(videos => this.videos = videos);
  }

  logout() {
    this.authService.logout();
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event:any) {
  onScroll() {
    console.log('scrolled!!!!');
  }
}
