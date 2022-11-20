import { Component } from '@angular/core';
import { SpareParts } from './spare-parts';

@Component({
  selector: 'app-spare-parts-list',
  templateUrl: './spare-parts-list.component.html',
  styleUrls: ['./spare-parts-list.component.scss']
})
export class SparePartsListComponent {

  spareParts: SpareParts[] = [{
    name: "Engranaje 1ra z34",
    brand: "Gran Sasso",
    amount: 22000,
    stock: 10,
    promotion: false
  },{
    name: "Engranaje 2da z29",
    brand: "Gran Sasso",
    amount: 23000,
    stock: 0,
    promotion: false
  },{
    name: "Engranaje 3da z28",
    brand: "Gran Sasso",
    amount: 21500,
    stock: 10,
    promotion: true
  },{
    name: "Directa IKA",
    brand: "Gran Sasso",
    amount: 28000,
    stock: 10,
    promotion: false
  },{
    name: "Directa Chev",
    brand: "Gran Sasso",
    amount: 28000,
    stock: 10,
    promotion: false
  },{
    name: "Quintuple 2.83",
    brand: "Gran Sasso",
    amount: 55000,
    stock: 10,
    promotion: false
  },{
    name: "Desplazable 3ra y 4ta",
    brand: "Gran Sasso",
    amount: 28000,
    stock: 10,
    promotion: true
  }];

  constructor(){

  }
}
