import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { SparePartsCartService } from '../spare-parts-cart.service';
import { SparePart } from '../spare-parts-list/spare-part';

@Component({
  selector: 'app-spare-parts-cart',
  templateUrl: './spare-parts-cart.component.html',
  styleUrls: ['./spare-parts-cart.component.scss']
})

export class SparePartsCartComponent{

  spareParts$: Observable<SparePart[]>;
  totalAmount: number = 0;

  constructor(private sparePartsCart: SparePartsCartService){
    this.spareParts$ = sparePartsCart.sparePartsSubject.asObservable();
    this.sparePartsCart.totalAmount.subscribe(data => this.totalAmount = data);
  }
}
