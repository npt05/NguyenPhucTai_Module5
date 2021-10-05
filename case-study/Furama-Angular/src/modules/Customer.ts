import {CustomerType} from './CustomerType';

export class Customer {
  customerId: number;
  customerCode: String;
  customername: String;
  customerGender: String;
  customerPhone: String;
  customerEmail: String;
  customerIdCard: String;
  customerAdress: String;
  customerBirthday: String;
  customerType: CustomerType;

  constructor(customerId: number, customerCode: String, customername: String, customerGender: String, customerPhone: String, customerEmail: String, customerIdCard: String, customerAdress: String, customerBirthday: String, customerType: CustomerType) {
    this.customerId = customerId;
    this.customerCode = customerCode;
    this.customername = customername;
    this.customerGender = customerGender;
    this.customerPhone = customerPhone;
    this.customerEmail = customerEmail;
    this.customerIdCard = customerIdCard;
    this.customerAdress = customerAdress;
    this.customerBirthday = customerBirthday;
    this.customerType = customerType;
  }
}
