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
  p: number = 1;
  customerName?: string = '';
  customerTypeName?: string = '';
  customers: Customer[] | any;
  customerTypes: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAll();
    this.p = 1;
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
    if (this.customerTypeName === "") {
      this.customerService.searchByName(this.customerName).subscribe(data => {
        this.customers = data;
        this.p = 1;
      });
    } else {
      this.customerService.search(this.customerName, this.customerTypeName).subscribe(customer => {
        this.customers = customer;
        this.p = 1;
      });
    }
  }


  deleteDialog(id: any): void {
    this.customerService.findById(id).subscribe(data => {

      const dialogRef = this.dialog.open(DeleteCustomerComponent, {
        width: '500px',
        data: {customer: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
