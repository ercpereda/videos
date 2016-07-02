import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../../models/video';

import { AuthService } from '../../services/auth.service';
import { VideosService } from '../../services/videos.service';

import { RatingBarComponent } from '../rating-bar/rating-bar.component';

@Component({
    selector: 'video-item',
    template: require('./video-item.component.html'),
    styles: [require('./video-item.component.css')],
    directives: [RatingBarComponent]
})
export class VideoItemComponent {
    @Input() video: Video;

    constructor(
        private authService: AuthService,
        private videosService: VideosService,
        private router: Router
    ) { }

    gotoDetail() {
        console.log('!!!!!!!!!');
        this.router.navigate(['/video', this.video.id]);
    }

    rated(value: number) {
        this.videosService.rate(this.video.id, value)
            .subscribe((a: any) => console.log(a));
    }
}
