import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from './jobs-list/job';

const URL = "https://62b613cd6999cce2e8feb474.mockapi.io/jobs";

@Injectable({
  providedIn: 'root'
})

export class JobsDataService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Job[]>{
    return this.http.get<Job[]>(URL);
  }

  setManager(job: Job): void{
    switch(job.area){
      case 'Cajas': job.manager = 'Ezequiel Mestelan';
      break;
      case 'Torneria': job.manager = 'Daniel Mestelan';
      break;
      default: job.manager = 'error';
    }
  }
}
