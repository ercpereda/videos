import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SummaryPipe } from '../../pipes/summary.pipe';

import { Video } from '../../models/video';

import { AuthService } from '../../services/auth.service';
import { VideosService } from '../../services/videos.service';

import { RatingBarComponent } from '../rating-bar/rating-bar.component';

@Component({
    selector: 'video-item',
    template: require('./video-item.component.html'),
    styles: [require('./video-item.component.css')],
    directives: [RatingBarComponent],
    pipes: [SummaryPipe]
})
export class VideoItemComponent {
    @Input() video: Video;

    constructor(
        private authService: AuthService,
        private videosService: VideosService,
        private router: Router
    ) { }

    gotoDetail() {
        this.router.navigate(['/video', this.video.id]);
    }

    rate(value: number) {
        this.videosService.rate(this.video.id, value)
            .subscribe((a: any) => this.video.addRating(value));
    }
}
