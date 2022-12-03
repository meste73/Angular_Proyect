import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from './jobs-list/job';

const URL = "https://62b613cd6999cce2e8feb474.mockapi.io/jobs";

@Injectable({
  providedIn: 'root'
})

export class JobsDataService {

  constructor(private http: HttpClient) {
    
  }

  getAll(): Observable<Job[]>{
    return this.http.get<Job[]>(URL);
  }

  post(job: Job): void{
    this.setManager(job);
    this.http.post<Job>(URL, job).subscribe( response => {
      console.log(response);
    });
  }

  put(id: number): void{
    console.log("id: " + id);
  }

  delete(id: number): void{
    this.http.delete<Job>(URL + "/" + id);
    console.log("id: " + id);
  }

  setManager(job: Job): void{
    switch(job.area){
      case 'cajas': job.manager = 'Ezequiel Mestelan';
      break;
      case 'torneria': job.manager = 'Daniel Mestelan';
      break;
      default: job.manager = 'error';
    }
  }
}
