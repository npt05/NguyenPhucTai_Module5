import {RenType} from './RenType';
import {ServiceType} from './ServiceType';


export interface Service{
  id?: number;
  name?: string;
  code?: string;
  maxPeople?: Number;
  area?: Number;
  numberOfFloors?: Number;
  standardRoom?: string;
  rentType?: RenType;
  serviceType?: ServiceType;
  description?: string;
  poolArea?: string;
  cost?: string;

}
