import { Component, OnInit } from '@angular/core';
import {Contract} from '../../../../modules/Contract';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contracts: Contract[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
