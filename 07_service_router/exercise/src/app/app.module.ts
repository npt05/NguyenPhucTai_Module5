import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryDetailComponent } from './ung-dung-tu-dien/dictionary/dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './ung-dung-tu-dien/dictionary/dictionary-page/dictionary-page.component';
import { ProductCreateComponent } from './product-management/product/product-create/product-create.component';
import { ProductDeleteComponent } from './product-management/product/product-delete/product-delete.component';
import { ProductEditComponent } from './product-management/product/product-edit/product-edit.component';
import { ProductListComponent } from './product-management/product/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductEditComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
