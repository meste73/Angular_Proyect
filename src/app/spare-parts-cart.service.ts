import { Injectable } from '@angular/core';
import { SparePart } from './spare-parts-list/spare-part';

@Injectable({
  providedIn: 'root'
})
export class SparePartsCartService {

  cartList: SparePart[] = [];

  constructor() {}

  addToCart(sparePart: SparePart){
    let item: SparePart | undefined = this.cartList.find((v1) => v1.name == sparePart.name);
    if(!item){
      this.cartList.push({... sparePart});
    } else{
      item.quantity += sparePart.quantity;
    }
    console.log(this.cartList);
  }
}
