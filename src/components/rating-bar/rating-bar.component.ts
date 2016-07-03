import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rating-bar',
    template: require('./rating-bar.component.html'),
    styles: [require('./rating-bar.component.css')]
})
export class RatingBarComponent {
    rating: number;
    @Output() rated = new EventEmitter();

    private stars = ['star_border', 'star_border', 'star_border', 'star_border', 'star_border'];

    rate(value: number) {
        this.rating = value;
        this.rated.emit(value);
    }

    mouseenter(star: number) {
        if (!this.rating) {
            for (let i = 0; i < star; i++) {
                this.stars[i] = 'star';
            }
        }
    }

    mouseleave() {
        if (!this.rating) {
            for (let i = 0; i < this.stars.length; i++) {
                this.stars[i] = 'star_border';
            }
        }
    }
}
