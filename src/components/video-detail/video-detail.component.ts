import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Video } from '../../models/video';

import { AuthService } from '../../services/auth.service';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'video-detail',
  template: require('./video-detail.component.html'),
  styles: [require('./video-detail.component.css')]
})
export class VideoDetailComponent implements OnInit, OnDestroy {
  video: Video;
  private paramsObservable: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private videosService: VideosService
  ) { }

  ngOnInit() {
    this.paramsObservable = this.route.params.subscribe(params => {
      let id: string = params['id'];
      this.videosService.getVideo(id)
        .subscribe((video: Video) => {
          this.video = video;
        });
    });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  ngOnDestroy() {
    this.paramsObservable.unsubscribe();
  }
}
