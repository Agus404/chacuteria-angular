import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CharcuteriaProducts } from './charcuteria-products/charcuteria-products';
import { ProductsList } from './products-list/products-list';
import { CharcuteriaAbout } from './charcuteria-about/charcuteria-about';
import { InputInteger } from './input-integer/input-integer';
import { Cart } from './cart/cart';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCartService } from './product-cart.service';
import { AddProduct } from './add-product/add-product';

@NgModule({
  declarations: [
    App,
    CharcuteriaProducts,
    ProductsList,
    CharcuteriaAbout,
    InputInteger,
    Cart,
    AddProduct
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductCartService],
  bootstrap: [App]
})
export class AppModule { }
