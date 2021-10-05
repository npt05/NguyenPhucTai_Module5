import { Component, OnInit } from '@angular/core';
import {Service} from '../../../../modules/Service';
import {RenType} from '../../../../modules/RenType';
import {ServiceType} from '../../../../modules/ServiceType';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  renType1 = new RenType(1, 'Hour');
  renType2 = new RenType(2, 'Day');
  renType3 = new RenType(3, 'Month');
  renType4 = new RenType(4, 'Year');
  renTypes: RenType[] = [this.renType1, this.renType2, this.renType3, this.renType4];

  serviceType1 = new ServiceType(1, 'Villa');
  serviceType2 = new ServiceType(2, 'Room');
  serviceType3 = new ServiceType(3, 'House');
  serviceTypes: ServiceType[] = [this.serviceType1, this.serviceType2, this.serviceType3];

  service1 =  new Service(1, 'Vip1', 'DV-0001', 5,  35, 3,
    '5Sao', this.renType2, this.serviceType1, 'DrinkFree', '30', '27000');
  service2 =  new Service(2, 'Vip2', 'DV-0002', 7,  55, 6,
    '5Sao', this.renType3, this.serviceType2, 'DrinkFree', '45', '55000');
  service3 =  new Service(3, 'Vip3', 'DV-0003', 3,  20, 1,
    '5Sao', this.renType1, this.serviceType3, 'DrinkFree', '24', '20000');
  services:Service[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
