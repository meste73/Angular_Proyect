import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SparePart } from './spare-parts-list/spare-part';

const URL = "http://localhost/Practicos/TPE/TPE-EZE-PARTE2/api/v1/jobs";

@Injectable({
  providedIn: 'root'
})
export class SparePartsDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<SparePart[]>{
    return this.http.get<SparePart[]>(URL);
  }
}
