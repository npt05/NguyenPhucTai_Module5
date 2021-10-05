import {Customer} from './Customer';
import {Employee} from './Employee';
import {Service} from './Service';

export class Contract{
  contractId: number;
  contractStartDate: String;
  contractEndDate: String;
  contractDeposit: String;
  contractTotalMoney: String;
  customer: Customer;
  employee: Employee;
  service: Service;

  constructor(contractId: number, contractStartDate: String, contractEndDate: String, contractDeposit: String, contractTotalMoney: String, customer: Customer, employee: Employee, service: Service) {
    this.contractId = contractId;
    this.contractStartDate = contractStartDate;
    this.contractEndDate = contractEndDate;
    this.contractDeposit = contractDeposit;
    this.contractTotalMoney = contractTotalMoney;
    this.customer = customer;
    this.employee = employee;
    this.service = service;
  }
}
