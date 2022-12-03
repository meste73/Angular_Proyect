import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { SparePartsCartService } from '../spare-parts-cart.service';
import { SparePartsListService } from '../spare-parts-list.service';
import { SparePart } from '../spare-parts-list/spare-part';

@Component({
  selector: 'app-garage-spare-parts',
  templateUrl: './garage-spare-parts.component.html',
  styleUrls: ['./garage-spare-parts.component.scss']
})

export class GarageSparePartsComponent implements OnInit {

  spareParts!: SparePart[];

  constructor(private sparePartsCart: SparePartsCartService, private sparePartsList: SparePartsListService){}

  ngOnInit(): void {
    this.sparePartsList.getAll()
        .pipe(finalize(() => this.checkingStock()))
        .subscribe(data => this.spareParts = data);
  }

  emptyCart(){
    this.sparePartsCart.emptyCart();
    this.ngOnInit();
  }

  serviceArraySize(){
    return this.sparePartsCart.arraySize();
  }

  checkingStock(): void {
    let auxSpareParts: SparePart[] = this.sparePartsCart.getSpareParts();
    for (let i = 0; i < this.spareParts.length; i++) {
      let sparePart: SparePart | undefined = this.spareParts.find(
        (sp) => sp.name == auxSpareParts[i].name
      );
      if(sparePart && sparePart.name ==  auxSpareParts[i].name)
        sparePart.stock -= auxSpareParts[i].quantity;
    }
  }
}
