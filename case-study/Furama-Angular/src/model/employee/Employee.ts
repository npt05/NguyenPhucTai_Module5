import {Education} from './Education';
import {Division} from './Division';
import {Position} from './Position';


export interface Employee {
  id?: number;
  name?: string;
  position?: Position;
  education?: Education;
  division?: Division;
  birthday?: string;
  idCard?: string;
  salary?: string;
  phone?: string;
  email?: string;
  address?: string;
}
