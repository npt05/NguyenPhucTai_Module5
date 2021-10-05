import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public result: number;

  constructor() { }

  ngOnInit(): void {
  }
  public calculator(numberOne: string, numberTwo: string, operator: string): number {
    const numOne: number = parseInt(numberOne);
    const numTwo: number = parseInt(numberTwo);
    switch (operator) {
      case '+' :
        this.result = numOne + numTwo;
        break;
      case '-':
        this.result = numOne - numTwo;
        break;
      case '*':
        this.result = numOne * numTwo;
        break;
      case '/':
        this.result = numOne / numTwo;
        break;
    }
    return this.result;
  }
}
