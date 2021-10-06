import { Component, OnInit } from '@angular/core';

import {CustomerService} from '../../../service/customer/customer.service';
import {Customer} from '../../../../modules/Customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[];
  constructor(private customerService: CustomerService) {
    this.customers = this.customerService.getAll()
  }

  ngOnInit(): void {
  }

}
