import {  Directive, ElementRef,
          Input, Output, EventEmitter,
          OnInit } from '@angular/core';

@Directive({
  selector: '[infinite-scroll]'
})
export class InfiniteScrollDirective implements OnInit {
  @Output() scroll = new EventEmitter();

  constructor(private window: Window) {}

  ngOnInit() {
    
  }
}
