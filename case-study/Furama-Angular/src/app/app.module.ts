import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateContractComponent} from './component/contract/create-contract/create-contract.component';
import {EditContractComponent} from './component/contract/edit-contract/edit-contract.component';
import {ListContractComponent} from './component/contract/list-contract/list-contract.component';
import {CreateContractDetailComponent} from './component/contract-detail/create-contract-detail/create-contract-detail.component';
import {CreateCustomerComponent} from './component/customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './component/customer/edit-customer/edit-customer.component';
import {ListCustomerComponent} from './component/customer/list-customer/list-customer.component';
import {CustomerUsingServiceComponent} from './component/customer/customer-using-service/customer-using-service.component';
import {CreateEmployeeComponent} from './component/employee/create-employee/create-employee.component';
import {EditEmployeeComponent} from './component/employee/edit-employee/edit-employee.component';
import {ListEmployeeComponent} from './component/employee/list-employee/list-employee.component';
import {CreateServiceComponent} from './component/service/create-service/create-service.component';
import {EditServiceComponent} from './component/service/edit-service/edit-service.component';
import {ListServiceComponent} from './component/service/list-service/list-service.component';
import {NavbarComponent} from './component/home/navbar/navbar.component';
import {FooterComponent} from './component/home/footer/footer.component';
import {BodyComponent} from './component/home/body/body.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteCustomerComponent } from './component/customer/delete-customer/delete-customer.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,

    CreateContractComponent,
    EditContractComponent,
    ListContractComponent,
    CreateContractDetailComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    CustomerUsingServiceComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    CreateServiceComponent,
    EditServiceComponent,
    ListServiceComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    DeleteCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
