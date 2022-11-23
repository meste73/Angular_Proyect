import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from './jobs-list/job';

const URL = "https://62b613cd6999cce2e8feb474.mockapi.io/jobs";

@Injectable({
  providedIn: 'root'
})

export class JobsDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Job[]>{
    return this.http.get<Job[]>(URL);
  }
}
