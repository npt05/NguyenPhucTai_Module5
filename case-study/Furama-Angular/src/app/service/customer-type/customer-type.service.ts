import { Injectable } from '@angular/core';
import {CustomerType} from '../../../modules/CustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  customerType1 = new CustomerType(1, 'Diamond');
  customerType2 = new CustomerType(2, 'Platinum');
  customerType3 = new CustomerType(3, 'Gold');
  customerType4 = new CustomerType(4, 'Silver');
  customerType5 = new CustomerType(5, 'Member');

  customerTypeList: CustomerType[] = [this.customerType1, this.customerType2, this.customerType3, this.customerType4, this.customerType5];
  constructor() { }

  getAll(){
    return this.customerTypeList
  }
}
