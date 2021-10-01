import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countdown-timer';
  seconds = 0;
  message = 'bắt đầu :';


  countDown(second: number) {
    this.seconds = second;
  }
}
