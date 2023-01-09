import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from '../interfaces/job';

const URL = "https://62b613cd6999cce2e8feb474.mockapi.io/jobs";

@Injectable({
  providedIn: 'root'
})

export class JobsDataService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Job[]>{
    return this.http.get<Job[]>(URL);
  }

  getJob(id: number): Observable<Job>{
    let url = URL + '/' + id;
    return this.http.get<Job>(url);
  }

  setManager(job: Job): Job{
    switch(job.area){
      case 'Cajas de cambios': job.manager = 'Ezequiel Mestelan';
      break;
      case 'Torneria': job.manager = 'Daniel Mestelan';
      break;
      default: job.manager = 'error';
    }
    return job;
  }
}
