import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger implements OnInit {

  constructor() { }

  @Input({required: true}) 
  quantity!: number; 

  @Input({required: true})  
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();


  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else
      this.maxReached.emit("se alcanzó el max");
  }

  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  changeQuantity(event: KeyboardEvent): void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }

}
