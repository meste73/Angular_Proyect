import { Component } from '@angular/core';
import { SparePartsCartService } from '../spare-parts-cart.service';

@Component({
  selector: 'app-spare-parts-cart',
  templateUrl: './spare-parts-cart.component.html',
  styleUrls: ['./spare-parts-cart.component.scss']
})
export class SparePartsCartComponent {

  constructor(private sparePartsCart: SparePartsCartService){
    
  }
}
