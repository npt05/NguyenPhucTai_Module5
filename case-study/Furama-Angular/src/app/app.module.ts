import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ContractComponent } from './components/contract/contract.component';
import { ContractDetailComponent } from './components/contract-detail/contract-detail.component';
import { CreateComponent } from './components/contract/create/create.component';
import { EditComponent } from './components/contract/edit/edit.component';
import { ListComponent } from './components/contract/list/list.component';
import { CustomerUseServiceComponent } from './components/customer/customer-use-service/customer-use-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    ContractComponent,
    ContractDetailComponent,
    CreateComponent,
    EditComponent,
    ListComponent,
    CustomerUseServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
