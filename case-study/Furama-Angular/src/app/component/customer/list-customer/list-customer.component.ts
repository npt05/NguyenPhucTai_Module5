import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../../model/customer/Customer';
import {CustomerTypeService} from '../../../service/customer-type/customer-type.service';
import {CustomerType} from '../../../../model/customer/CustomerType';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCustomerComponent} from '../delete-customer/delete-customer.component';
import {CustomerService} from '../../../service/customer/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  p: number;
  customerName = '';
  customerTypeName = '';
  customers: Customer[] | any;
  customerTypes: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
      this.customerTypeService.getAll().subscribe(customerType => {
        this.customerTypes = customerType;
      });
    });
  }
  search() {
    this.customerService.search(this.customerName, this.customerTypeName).subscribe(customer => {
      this.customers = customer;
    });
  }


  deleteDialog(id: any): void {
    this.customerService.findById(id).subscribe(dataCustomer => {
      const dialogRef = this.dialog.open(DeleteCustomerComponent, {
        width: '500px',
        data: {data1: dataCustomer}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
