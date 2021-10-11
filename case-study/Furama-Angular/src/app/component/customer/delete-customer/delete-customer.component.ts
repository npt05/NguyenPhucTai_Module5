import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../../../service/customer/customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customerName;
  customerId;
  constructor(
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<DeleteCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matSnackBar: MatSnackBar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.customerName = this.data.customer.name;
    this.customerId = this.data.customer.id;
  }
  delete() {
    this.customerService.delete(this.customerId).subscribe(data => {
      this.dialogRef.close();
      this.matSnackBar.open("Delete thành công", "OK", {
        duration: 3500,
        panelClass: "red-snackbar",
        verticalPosition: 'top'
      })
    });
  }

}
