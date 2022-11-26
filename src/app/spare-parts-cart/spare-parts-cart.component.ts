import { Component } from '@angular/core';
import { SparePartsCartService } from '../spare-parts-cart.service';
import { SparePart } from '../spare-parts-list/spare-part';

@Component({
  selector: 'app-spare-parts-cart',
  templateUrl: './spare-parts-cart.component.html',
  styleUrls: ['./spare-parts-cart.component.scss']
})
export class SparePartsCartComponent {

  spareParts: SparePart[] = [];
  totalAmount: number = 0;

  constructor(private sparePartsCart: SparePartsCartService){
    this.sparePartsCart._spareParts.subscribe(data => {
      this.spareParts = data;
    })
    this.sparePartsCart._totalAmount.subscribe(data => {
      this.totalAmount = data;
    })
  }
}
