import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() seconds: number;
  @Input() message = 'bắt đầu :';
  @Output() finish  = new EventEmitter<number>();
  private interval: number;
  check = true;

  constructor() {
  }

  ngOnInit() {
  }
  start() {
    this.message = 'còn lại :';
    this.countDown();
    this.check = false;
  }

  clearTimer() {
    clearInterval(this.interval);
  }

  stop() {
    this.message = 'tạm dừng :';
    this.clearTimer();
    this.check = true;
  }

  reset() {
    this.message = 'con lại :';
    this.seconds = 10;
    this.stop();
  }

  private countDown() {
    this.interval = setInterval(() => {
      this.seconds = this.seconds - 1;
      if (this.seconds === 0) {
        this.stop();
      }
      this.finish.emit(this.seconds);
    }, 1000);
  }
}
