import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ImageGalleryModule} from './angular-gallery-app/image-gallery/image-gallery.module';
import {GalleryConfig} from './angular-gallery-app/image-gallery/token';
import {RouterModule} from '@angular/router';
import {ProductModule} from './angular-product-managenment/product/product.module';
import {ProductRoutingModule} from './angular-product-managenment/product/product-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageGalleryModule,
    RouterModule,
    ProductModule,
    ProductRoutingModule
  ],
  providers: [
    {provide: GalleryConfig, useValue: 3}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
