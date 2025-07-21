import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './products-list/Product';

const URL ='https://687d890a918b642243320658.mockapi.io/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL)
      .pipe(tap((products: Product[]) => products.forEach(product => product.quantity = 0)));
  }
  
  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(URL, product);
  }
}

