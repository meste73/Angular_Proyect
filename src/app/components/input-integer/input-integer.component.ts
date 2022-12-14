import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})

export class InputIntegerComponent implements OnInit{
  
  @Input() quantity!: number;
  @Input() limit!: number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void{}

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
    let acceptedValues = /^[0-9]+$/;
    let value = event.key;
    if((value.match(acceptedValues)) && (this.quantity <= this.limit) &&(this.quantity != 0)){
      this.quantity = +event.key;
      this.quantityChange.emit(this.quantity);
    }else {
      this.quantity = 0;
    }
  }
}
