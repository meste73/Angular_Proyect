import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SparePart } from '../components/garage-spare-parts/spare-parts-list/spare-part';

const URL = "https://62b613cd6999cce2e8feb474.mockapi.io/spareParts";

@Injectable({
  providedIn: 'root'
})

export class SparePartsListService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<SparePart[]>{
    return this.http.get<SparePart[]>(URL);
  }
}
