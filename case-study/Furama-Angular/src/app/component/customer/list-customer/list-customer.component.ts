import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../../modules/Customer";
import {CustomerType} from '../../../../modules/CustomerType';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customerType1 = new CustomerType(1, 'Diamond');
  customerType2 = new CustomerType(2, 'Platinum');
  customerType3 = new CustomerType(3, 'Gold');
  customerType4 = new CustomerType(4, 'Silver');
  customerType5 = new CustomerType(5, 'Member');

  customer1 = new Customer('KH-0001', 'Hoàng Long', 'Nam', '0902839472',
    'longhoang@gmail.com', '123456789', 'Hà Nội', '2021-10-15', this.customerType1);
  customer2 = new Customer('KH-0002', 'Hữu Tài', 'Nam', '0912483476',
    'huutai@gmail.com', '101856379', 'Huế', '2021-08-22', this.customerType2);
  customer3 = new Customer('KH-0003', 'Võ Tuấn', 'Nam', '0912027426',
    'tuanvo@gmail.com', '340816786', 'Quảng Nam', '2021-12-09', this.customerType3);
  customer4 = new Customer('KH-0004', 'Kim Anh', 'Nữ', '0902686391',
    'anhkim@gmail.com', '358794658', 'Đà Nẵng', '2021-07-17', this.customerType4);
  customers: Customer[] = [this.customer1, this.customer2, this.customer3, this.customer4];
  customerTypeList: CustomerType[] = [this.customerType1, this.customerType2, this.customerType3, this.customerType4, this.customerType5];
  constructor() { }

  ngOnInit(): void {
  }

}
