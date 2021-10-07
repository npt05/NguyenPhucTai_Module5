import {Customer} from '../customer/Customer';
import {Employee} from '../employee/Employee';
import {Service} from '../service/Service';

export interface Contract{
  id?: number;
  contractStartDate?: String;
  contractEndDate?: String;
  contractDeposit?: String;
  contractTotalMoney?: String;
  customer?: Customer;
  employee?: Employee;
  service?: Service;

}
