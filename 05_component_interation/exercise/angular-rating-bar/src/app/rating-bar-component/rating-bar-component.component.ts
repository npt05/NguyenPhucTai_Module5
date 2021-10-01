import { Component, Input, OnInit } from '@angular/core';
import {IRatingUnit} from '../i-rating-unit';

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponentComponent implements OnInit {
  @Input() value: number;
  constructor() { }

  ngOnInit(): void {
  }
}
