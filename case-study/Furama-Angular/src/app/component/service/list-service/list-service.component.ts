import { Component, OnInit } from '@angular/core';
import {Service} from '../../../../modules/Service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  services:Service[] = [
    {serviceCode: 'DV-0001', serviceName: 'Vip1', serviceCost: '2000000', serviceArea: 20, serviceMaxPeople: 4, numberOfFloors: 2,
    standardRoom: '5sao', poolArea: '40', descriptionOtherConvenience: 'Drink Free', rentType: 'Day', serviceType: 'Villa'},
    {serviceCode: 'DV-0002', serviceName: 'Vip2', serviceCost: '43000000', serviceArea: 20, serviceMaxPeople: 6, numberOfFloors: 1,
      standardRoom: '5sao', poolArea: '37', descriptionOtherConvenience: 'Drink Free', rentType: 'Monht', serviceType: 'House'},
    {serviceCode: 'DV-0003', serviceName: 'Vip3', serviceCost: '2500000', serviceArea: 20, serviceMaxPeople: 2, numberOfFloors: 4,
      standardRoom: '5sao', poolArea: '38', descriptionOtherConvenience: 'Drink Free', rentType: 'Year', serviceType: 'Room'},
    {serviceCode: 'DV-0004', serviceName: 'Vip4', serviceCost: '1900000', serviceArea: 20, serviceMaxPeople: 3, numberOfFloors: 6,
      standardRoom: '5sao', poolArea: '32', descriptionOtherConvenience: 'Drink Free', rentType: 'Hour', serviceType: 'Room'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
