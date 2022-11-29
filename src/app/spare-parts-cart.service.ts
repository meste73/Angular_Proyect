import { Injectable } from '@angular/core';
import { SparePart } from './spare-parts-list/spare-part';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SparePartsCartService {

  private spareParts: SparePart[] = [];
  private totalAmount: number = 0;

  sparePartsSubject: BehaviorSubject<SparePart[]> = new BehaviorSubject(this.spareParts);
  totalAmountSubject: BehaviorSubject<number> = new BehaviorSubject(this.totalAmount);

  _spareParts: Observable<SparePart[]> = this.sparePartsSubject.asObservable();
  _totalAmount: Observable<number> = this.totalAmountSubject.asObservable();

  constructor() {}

  addToCart(sparePart: SparePart): void {
    let item: SparePart | undefined = this.spareParts.find(
      (v1) => v1.name == sparePart.name
    );
    if(sparePart.quantity != 0){
      if (item)
        item.quantity += sparePart.quantity;
      else if(!item)
        this.spareParts.push({...sparePart})
      
      this.sparePartsSubject.next(this.spareParts);
      this.updateTotalAmount();
    }
  }

  public getSpareParts(): SparePart[] {
    return this.spareParts;
  }

  updateTotalAmount(): void{
    this.totalAmount = 0;
    for(let i = 0; i<this.spareParts.length; i++){
      this.totalAmount += this.spareParts[i].amount * this.spareParts[i].quantity;
    }
    this.totalAmountSubject.next(this.totalAmount);
  }

  emptyCart(): void{
    this.spareParts = [];
    this.sparePartsSubject.next(this.spareParts);
    this.updateTotalAmount();
  }

  arraySize(): number{
    return this.spareParts.length;
  }

}
