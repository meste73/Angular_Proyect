import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SparePart } from '../spare-parts-list/spare-part';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit{

  constructor() {}

  ngOnInit(): void{}

  @Input() quantity!: number;
  @Input() limit!: number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity(limit: number): void{
    if(this.quantity < limit){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else{
      this.maxReached.emit("Se alcanzo la cantidad maxima");
    }
  }

  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: any): void{
    console.log(event);
    if(event.key < "0" || event.key > "9"){
      this.quantity = 0;
    } else if(this.quantity <= this.limit){
      this.quantity = Number(event.key);
      this.quantityChange.emit(this.quantity);
    }
  }

}
