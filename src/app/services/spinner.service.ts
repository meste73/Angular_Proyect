import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private loading: boolean = false;
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.loading);
  _loading: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {}

  setLoading(status: boolean){
    this.loading = status;
    this.loadingSubject.next(this.loading);
  }
}
