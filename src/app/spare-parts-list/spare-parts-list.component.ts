import { Component, OnInit, Input } from '@angular/core';
import { SparePartsCartService } from '../spare-parts-cart.service';
import { SparePart } from './spare-part';

@Component({
  selector: 'app-spare-parts-list',
  templateUrl: './spare-parts-list.component.html',
  styleUrls: ['./spare-parts-list.component.scss'],
})

export class SparePartsListComponent implements OnInit {  

  @Input() spareParts!: SparePart[];

  constructor(private sparePartsCart: SparePartsCartService) {}

  ngOnInit(): void {}

  maxReached(m: string) {
    alert(m);
  }

  addToCart(sparePart: SparePart): void {
    this.sparePartsCart.addToCart(sparePart);
    sparePart.stock -= sparePart.quantity;
    sparePart.quantity = 0;
  }
}
