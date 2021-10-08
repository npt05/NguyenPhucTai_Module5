import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import {ProductRoutingModule} from './product-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class ProductModule { }
