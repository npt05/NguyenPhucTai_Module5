import {RenType} from './RenType';
import {ServiceType} from './ServiceType';


export class Service{
  serviceId: number;
  serviceName: String;
  serviceCode: String;
  serviceMaxPeople: Number;
  serviceArea: Number;
  numberOfFloors: Number;
  standardRoom: String;
  rentType: RenType;
  serviceType: ServiceType;
  descriptionOtherConvenience: String;
  poolArea: String;
  serviceCost: String;


  constructor(serviceId: number, serviceName: String, serviceCode: String, serviceMaxPeople: Number, serviceArea: Number, numberOfFloors: Number, standardRoom: String, rentType: RenType, serviceType: ServiceType, descriptionOtherConvenience: String, poolArea: String, serviceCost: String) {
    this.serviceId = serviceId;
    this.serviceName = serviceName;
    this.serviceCode = serviceCode;
    this.serviceMaxPeople = serviceMaxPeople;
    this.serviceArea = serviceArea;
    this.numberOfFloors = numberOfFloors;
    this.standardRoom = standardRoom;
    this.rentType = rentType;
    this.serviceType = serviceType;
    this.descriptionOtherConvenience = descriptionOtherConvenience;
    this.poolArea = poolArea;
    this.serviceCost = serviceCost;
  }
}
