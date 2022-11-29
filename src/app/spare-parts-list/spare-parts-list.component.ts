import { Component, OnInit, Input } from '@angular/core';
import { SparePartsCartService } from '../spare-parts-cart.service';
import { SparePart } from './spare-part';

@Component({
  selector: 'app-spare-parts-list',
  templateUrl: './spare-parts-list.component.html',
  styleUrls: ['./spare-parts-list.component.scss'],
})
export class SparePartsListComponent implements OnInit {
  

  constructor(private sparePartsCart: SparePartsCartService) {}

  @Input() spareParts!: SparePart[];
  
  ngOnInit(): void {
    this.checkingStock();
  }

  maxReached(m: string) {
    alert(m);
  }

  addToCart(sparePart: SparePart): void {
    this.sparePartsCart.addToCart(sparePart);
    sparePart.stock -= sparePart.quantity;
    sparePart.quantity = 0;
  }

  checkingStock(): void {
    let auxSpareParts: SparePart[] = this.sparePartsCart.getSpareParts();
    for (let i = 0; i < this.spareParts.length; i++) {
      for (let j = 0; j < auxSpareParts.length; j++) {
        if (this.spareParts[i].name == auxSpareParts[j].name) {
          this.spareParts[i].stock -= auxSpareParts[j].quantity;
        }
      }
    }
  }
}
