import { Component, EventEmitter, Input, Output, SimpleChanges, OnInit } from '@angular/core';
import {IRatingUnit} from '../i-rating-unit';

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponentComponent implements OnInit {
  @Input()
  max = 10;
  @Input()
  ratingValue = 5;
  @Input()
  showRatingValue = true;

  @Output()
  rateChange = new EventEmitter<number>();

  ratingUnits: Array<IRatingUnit> = [];
  constructor() { }

  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  calculate(max, ratingValue) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  select(index) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = Boolean(idx < this.ratingValue));
    this.rateChange.emit(this.ratingValue);
  }
  enter(index) {
    this.ratingUnits.forEach((item, idx) => item.active = Boolean(idx <= index));
  }
  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = Boolean(idx < this.ratingValue));
  }
}
