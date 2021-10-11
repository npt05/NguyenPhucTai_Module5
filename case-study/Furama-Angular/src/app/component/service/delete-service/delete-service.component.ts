import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ServiceService} from '../../../service/service/service.service';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.css']
})
export class DeleteServiceComponent implements OnInit {
  serviceName;
  serviceId;
  constructor(
    private serviceService:ServiceService,
    public dialogRef: MatDialogRef<DeleteServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matSnackBar: MatSnackBar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.serviceName = this.data.service.name;
    this.serviceId = this.data.service.id;
  }
  delete() {
    this.serviceService.delete(this.serviceId).subscribe(data => {
      this.dialogRef.close();
      this.matSnackBar.open("Delete thành công", "OK", {
        duration: 3500,
        panelClass: "red-snackbar",
        verticalPosition: 'top'
      })
    });
  }
}
