import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class Cart {
  cartList$: Observable<Product[]>;
  constructor(private cart: ProductCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }
  
}
