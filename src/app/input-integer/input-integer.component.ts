import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  upQuantity(limit: number): void{
    if(this.quantity < this.limit){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

}
