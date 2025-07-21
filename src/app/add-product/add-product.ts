import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss'
})
export class AddProduct {
   @Output() productAdded = new EventEmitter<Product>();

    AddProductForm= new FormGroup({
      name: new FormControl<string>('', Validators.required),
      type: new FormControl<string>('', Validators.required),
      price: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
      stock: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
      image: new FormControl<string>('',),
          clearance: new FormControl<boolean>(false),
});


onSubmit() {
  if (this.AddProductForm.valid) {
    const newProduct: Product = {
      name: this.AddProductForm.value.name ?? '',
      type: this.AddProductForm.value.type ?? '',
      price: Number(this.AddProductForm.value.price) ?? 0,
      stock: Number(this.AddProductForm.value.stock) ?? 0,
      clearance: this.AddProductForm.value.clearance ?? false, 
      quantity: 0,
    };
    this.productAdded.emit(newProduct);
    this.AddProductForm.reset({ stock: 0, price: 0, clearance: false });
  }
}

}

