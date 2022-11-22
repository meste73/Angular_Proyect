import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from './jobs-list/job';

const URL = "http://localhost/Practicos/TPE/TPE-EZE-PARTE2/api/v1/jobs";

@Injectable({
  providedIn: 'root'
})

export class JobsDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Job[]>{
    return this.http.get<Job[]>(URL);
  }
}
