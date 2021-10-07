import {Injectable} from '@angular/core';
import {Customer} from '../../../modules/Customer';
import {CustomerTypeService} from '../customer-type/customer-type.service';
import {CustomerType} from '../../../modules/CustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[];
  customerTypeList: CustomerType[];

  constructor(private customerType: CustomerTypeService) {
    this.customerTypeList = this.customerType.getAll();
    this.customers = [
      {
        customerId: "1", customerCode: 'KH-0001', customerName: 'Hoàng Long', customerGender: 'Nam',
        customerPhone: '0902839472', customerEmail: 'longhoang@gmail.com', customerIdCard: '123456789',
        customerAdress: 'Hà Nội', customerBirthday: '2021-11-09', customerType: this.customerTypeList[0]
      },
      {
        customerId: "2", customerCode: 'KH-0002', customerName: 'Văn Tuấn', customerGender: 'Nam',
        customerPhone: '0912018445', customerEmail: 'vantuan@gmail.com', customerIdCard: '120846789',
        customerAdress: 'Bình Dương', customerBirthday: '2021-09-08', customerType: this.customerTypeList[1]
      },
      {
        customerId: "3", customerCode: 'KH-0003', customerName: 'Hải Yến', customerGender: 'Nữ',
        customerPhone: '0904989488', customerEmail: 'haiyen@gmail.com', customerIdCard: '120284789',
        customerAdress: 'Huế', customerBirthday: '2021-03-23', customerType: this.customerTypeList[2]
      },
      {
        customerId: "4", customerCode: 'KH-0004', customerName: 'Liên Giang', customerGender: 'Nữ',
        customerPhone: '0919157444', customerEmail: 'gianglien@gmail.com', customerIdCard: '128173789',
        customerAdress: 'Huế', customerBirthday: '2021-08-17', customerType: this.customerTypeList[3]
      }
    ];
  }

  getAll() {
    return this.customers;
  }

  createCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  findById(id: String): Customer {
    for (let customer of this.customers) {

      if (customer.customerId == id) {
        return customer;
      }
    }
    return null;
  }

}
