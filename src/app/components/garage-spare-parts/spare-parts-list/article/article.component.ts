import { Component, Input } from '@angular/core';
import { SparePartsCartService } from '../../../../services/spare-parts-cart.service';
import { SparePart } from '../spare-part';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent {

  @Input() sparePart!: SparePart;

  constructor(private sparePartsCart:SparePartsCartService){}

  maxReached(m: string): void{
    alert(m);
  }

  addToCart(sparePart: SparePart): void {
    this.sparePartsCart.addToCart(sparePart);
    sparePart.stock -= sparePart.quantity;
    sparePart.quantity = 0;
  }
}
