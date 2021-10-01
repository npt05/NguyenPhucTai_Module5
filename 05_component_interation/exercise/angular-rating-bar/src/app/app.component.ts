import { Component } from '@angular/core';
import {IRatingUnit} from './i-rating-unit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rating-bar';
  iRatingUnit: IRatingUnit = {
    value: 3,
    active: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  };
  tich(active: number) {
    this.iRatingUnit.value = active ;
  }
}
