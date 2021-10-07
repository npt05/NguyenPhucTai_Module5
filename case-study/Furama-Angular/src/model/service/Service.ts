import {RenType} from './RenType';
import {ServiceType} from './ServiceType';


export interface Service{
  serviceId?: number;
  serviceName?: String;
  serviceCode?: String;
  serviceMaxPeople?: Number;
  serviceArea?: Number;
  numberOfFloors?: Number;
  standardRoom?: String;
  rentType?: RenType;
  serviceType?: ServiceType;
  descriptionOtherConvenience?: String;
  poolArea?: String;
  serviceCost?: String;


}
