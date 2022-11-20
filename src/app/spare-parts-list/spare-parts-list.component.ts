import { Component } from '@angular/core';
import { SparePart } from './spare-part';

@Component({
  selector: 'app-spare-parts-list',
  templateUrl: './spare-parts-list.component.html',
  styleUrls: ['./spare-parts-list.component.scss']
})
export class SparePartsListComponent {

  spareParts: SparePart[] = [{
    name: "Engranaje 1ra z34",
    brand: "Gran Sasso",
    amount: 22000,
    stock: 10,
    promotion: false,
    quantity: 0
  },{
    name: "Engranaje 2da z29",
    brand: "Gran Sasso",
    amount: 23000,
    stock: 0,
    promotion: false,
    quantity: 0
  },{
    name: "Engranaje 3da z28",
    brand: "Gran Sasso",
    amount: 21500,
    stock: 10,
    promotion: true,
    quantity: 0
  },{
    name: "Directa IKA",
    brand: "Gran Sasso",
    amount: 28000,
    stock: 10,
    promotion: false,
    quantity: 0
  },{
    name: "Directa Chev",
    brand: "Gran Sasso",
    amount: 28000,
    stock: 10,
    promotion: false,
    quantity: 0
  },{
    name: "Quintuple 2.83",
    brand: "Gran Sasso",
    amount: 55000,
    stock: 10,
    promotion: false,
    quantity: 0
  },{
    name: "Desplazable 3ra y 4ta",
    brand: "Gran Sasso",
    amount: 28000,
    stock: 10,
    promotion: true,
    quantity: 0
  }];

  constructor(){}

  ngOnInit(): void{}

  upQuantity(sparePart: SparePart): void{
    if(sparePart.quantity < sparePart.stock){
      sparePart.quantity++;
    }
  }

  downQuantity(sparePart: SparePart): void{
    if(sparePart.quantity > 0){
      sparePart.quantity--;
    }
  }

}
