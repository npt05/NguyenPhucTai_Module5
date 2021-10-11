import {Customer} from '../customer/Customer';
import {Employee} from '../employee/Employee';
import {Service} from '../service/Service';

export interface Contract{
  id?: number;
  contractStartDate?: string;
  contractEndDate?: string;
  contractDeposit?: string;
  contractTotalMoney?: string;
  customer?: Customer;
  employee?: Employee;
  service?: Service;
}
