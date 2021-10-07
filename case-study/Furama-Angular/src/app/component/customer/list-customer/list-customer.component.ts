import { Component, OnInit } from '@angular/core';

import {CustomerService} from '../../../service/customer/customer.service';
import {Customer} from '../../../../model/customer/Customer';
import {CustomerTypeService} from '../../../service/customer-type/customer-type.service';
import {CustomerType} from '../../../../model/customer/CustomerType';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[] | any;
  customerTypes: CustomerType[];
  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
    this.customerService.getAll().subscribe(next =>{
      this.customers = next;
      console.log(next);
    });
  }
  ngOnInit(): void {
  }

}
