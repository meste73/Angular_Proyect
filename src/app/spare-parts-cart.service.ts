import { Injectable } from '@angular/core';
import { SparePart } from './garage-spare-parts/spare-parts-list/spare-part';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SparePartsCartService {

  private _spareParts: SparePart[] = [];
  private _totalAmount: number = 0;

  sparePartsSubject: BehaviorSubject<SparePart[]> = new BehaviorSubject(this._spareParts);
  totalAmountSubject: BehaviorSubject<number> = new BehaviorSubject(this._totalAmount);

  spareParts: Observable<SparePart[]> = this.sparePartsSubject.asObservable();
  totalAmount: Observable<number> = this.totalAmountSubject.asObservable();

  constructor() {}

  addToCart(sparePart: SparePart): void{
    let item: SparePart | undefined = this._spareParts.find(
      (sp) => sp.name == sparePart.name
    );
    if(sparePart.quantity != 0){
      if (item)
        item.quantity += sparePart.quantity;
      else if(!item)
        this._spareParts.push({...sparePart})
      
      this.sparePartsSubject.next(this._spareParts);
      this.updateTotalAmount();
    }
  }

  public getSpareParts(): SparePart[]{
    return this._spareParts;
  }

  updateTotalAmount(): void{
    this._totalAmount = 0;
    for(let i = 0; i<this._spareParts.length; i++){
      this._totalAmount += this._spareParts[i].amount * this._spareParts[i].quantity;
    }
    this.totalAmountSubject.next(this._totalAmount);
  }

  emptyCart(): void{
    this._spareParts = [];
    this.sparePartsSubject.next(this._spareParts);
    this.updateTotalAmount();
  }

  arraySize(): number{
    return this._spareParts.length;
  }

}
