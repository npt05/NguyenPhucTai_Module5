import { Component, OnInit } from '@angular/core';
import {Service} from '../../../../model/service/Service';
import {ServiceService} from '../../../service/service/service.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteServiceComponent} from '../delete-service/delete-service.component';


@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  p: number = 1;
  services: Service[] | any;
  constructor(private serviceService: ServiceService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
    this.p =1;
  }

  getAll() {
    this.serviceService.getAll().subscribe(services => {
      this.services = services;
    });
  }

  deleteDialog(id: any): void {
    this.serviceService.findById(id).subscribe(dataService => {
      const dialogRef = this.dialog.open(DeleteServiceComponent, {
        width: '500px',
        data: {service: dataService},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
