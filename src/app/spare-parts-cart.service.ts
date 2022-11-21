import { Injectable } from '@angular/core';
import { SparePart } from './spare-parts-list/spare-part';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SparePartsCartService {

  private spareParts: SparePart[] = [];
  sparePartsSubject: BehaviorSubject<SparePart[]> = new BehaviorSubject(this.spareParts);
  _spareParts: Observable<SparePart[]> = this.sparePartsSubject.asObservable();


  constructor() {}

  addToCart(sparePart: SparePart){
    let item: SparePart | undefined = this.spareParts.find((v1) => v1.name == sparePart.name);
    if(!item){
      this.spareParts.push({... sparePart});
    } else{
      item.quantity += sparePart.quantity;
    }
    this.sparePartsSubject.next(this.spareParts);
  }
}
