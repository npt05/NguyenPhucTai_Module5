import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponentComponent implements OnInit {
  @Input() value: number;
  constructor() { }

  ngOnInit(): void {
  }
}
