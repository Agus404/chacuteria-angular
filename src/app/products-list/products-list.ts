import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './Product';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss'
})
export class ProductsList implements OnInit {
  
  products: Product [] = [];
  
  constructor(private cart: ProductCartService,
    private productsDataService: ProductDataService){
  }

  ngOnInit(): void {
      this.productsDataService.getAll()
      .subscribe(products=> this.products = products);
  }
  trackProductId(index: number, product: any): number {
    return product.id;
  }

addToCart(product: Product): void{
  this.cart.addToCart(product); 
  product.stock-=product.quantity; 
  product.quantity = 0;

}

maxReached(m:string){
   alert(m);
}

onProductAdded(product: Product): void {
  this.productsDataService.addProduct(product).subscribe((addedProduct) => {
    this.products.push(addedProduct);
  });
}

}
