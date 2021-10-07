import {CustomerType} from './CustomerType';


export interface Customer {
  id?: number;
  code?: string;
  customerType?: CustomerType;
  name?: string;
  birthday?: string;
  phone?: string;
  idCard?: string;
  email?: string;
  address?: string;
}
