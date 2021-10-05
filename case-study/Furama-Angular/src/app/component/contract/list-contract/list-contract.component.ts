import { Component, OnInit } from '@angular/core';
import {Contract} from '../../../../modules/Contract';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract[] = [
    {contractStartDate: '2021-09-22', contractEndDate: '2021-09-25', contractDeposit: '100000', contractTotalMoney: '2000000',
    customer: 'Hoàng Long', employee: 'Liên Giang', service: 'Villa'},
    {contractStartDate: '2021-09-23', contractEndDate: '2021-09-26', contractDeposit: '120000', contractTotalMoney: '2500000',
      customer: 'Đăng Chúc', employee: 'Diệu Chi', service: 'Room'},
    {contractStartDate: '2021-09-24', contractEndDate: '2021-09-26', contractDeposit: '70000', contractTotalMoney: '3500000',
      customer: 'Hữu Tài', employee: 'Phương Linh', service: 'House'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
