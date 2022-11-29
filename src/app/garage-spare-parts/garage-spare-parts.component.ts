import { Component, OnInit } from '@angular/core';
import { SparePartsCartService } from '../spare-parts-cart.service';
import { SparePartsListService } from '../spare-parts-list.service';
import { SparePart } from '../spare-parts-list/spare-part';

@Component({
  selector: 'app-garage-spare-parts',
  templateUrl: './garage-spare-parts.component.html',
  styleUrls: ['./garage-spare-parts.component.scss']
})
export class GarageSparePartsComponent implements OnInit {

  constructor(private sparePartsCart: SparePartsCartService, private sparePartsList: SparePartsListService){}

  spareParts: SparePart[] = [];

  ngOnInit(): void {
    this.sparePartsList.getAll().subscribe(_spareParts => this.spareParts = _spareParts);
  }

  emptyCart(){
    this.sparePartsCart.emptyCart();
    this.ngOnInit();
  }

  serviceArraySize(){
    return this.sparePartsCart.arraySize();
  }
}
