import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rating-bar',
  template: require('./rating-bar.component.html'),
  styles: [require('./rating-bar.component.css')]
})
export class RatingBarComponent {
  @Input() rating: number;
  @Output() rated = new EventEmitter();

  rate(value: number) {
    this.rated.emit(value);
  }
}
