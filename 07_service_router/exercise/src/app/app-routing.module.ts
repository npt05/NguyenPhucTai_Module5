import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductListComponent} from './product-management/product/product-list/product-list.component';
import {ProductCreateComponent} from './product-management/product/product-create/product-create.component';
import {ProductEditComponent} from './product-management/product/product-edit/product-edit.component';
import {ProductDeleteComponent} from './product-management/product/product-delete/product-delete.component';
import {DictionaryDetailComponent} from './ung-dung-tu-dien/dictionary/dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './ung-dung-tu-dien/dictionary/dictionary-page/dictionary-page.component';


const routes: Routes = [
  {
    path: 'dictionary/dictionary-page',
    component: DictionaryPageComponent
  },
  {
    path: 'dictionary/:english',
    component: DictionaryDetailComponent
  },
  {
    path: 'product/list',
    component: ProductListComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
