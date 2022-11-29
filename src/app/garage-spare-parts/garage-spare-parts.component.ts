import { Component, OnInit } from '@angular/core';
import { SparePartsCartService } from '../spare-parts-cart.service';
import { SparePart } from '../spare-parts-list/spare-part';

@Component({
  selector: 'app-garage-spare-parts',
  templateUrl: './garage-spare-parts.component.html',
  styleUrls: ['./garage-spare-parts.component.scss']
})
export class GarageSparePartsComponent implements OnInit {

  constructor(private sparePartsCart: SparePartsCartService){}

  spareParts: SparePart[] = [];

  ngOnInit(): void {
    this.spareParts = [
      {
        name: 'Engranaje 1ra z34',
        brand: 'Gran Sasso',
        amount: 22000,
        stock: 10,
        promotion: false,
        quantity: 0,
      },
      {
        name: 'Engranaje 2da z29',
        brand: 'Gran Sasso',
        amount: 23000,
        stock: 0,
        promotion: false,
        quantity: 0,
      },
      {
        name: 'Engranaje 3da z28',
        brand: 'Gran Sasso',
        amount: 21500,
        stock: 10,
        promotion: true,
        quantity: 0,
      },
      {
        name: 'Directa IKA',
        brand: 'Gran Sasso',
        amount: 28000,
        stock: 10,
        promotion: false,
        quantity: 0,
      },
      {
        name: 'Directa Chev',
        brand: 'Gran Sasso',
        amount: 28000,
        stock: 10,
        promotion: false,
        quantity: 0,
      },
      {
        name: 'Quintuple 2.83',
        brand: 'Gran Sasso',
        amount: 55000,
        stock: 10,
        promotion: false,
        quantity: 0,
      },
      {
        name: 'Desplazable 3ra y 4ta',
        brand: 'Gran Sasso',
        amount: 28000,
        stock: 10,
        promotion: true,
        quantity: 0,
      },
    ];
  }

  emptyCart(){
    this.sparePartsCart.emptyCart();
    this.ngOnInit();
  }
}
