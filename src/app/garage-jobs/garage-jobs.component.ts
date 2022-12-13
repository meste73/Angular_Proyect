import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { JobsDataService } from '../jobs-data.service';
import { Job } from '../garage-jobs/jobs-list/job';
import { AdminService } from '../admin.service';

const URL = "https://62b613cd6999cce2e8feb474.mockapi.io/jobs";

@Component({
  selector: 'app-garage-jobs',
  templateUrl: './garage-jobs.component.html',
  styleUrls: ['./garage-jobs.component.scss']
})

export class GarageJobsComponent implements OnInit {

  jobs!:Observable<Job[]>;
  job!:Job;
  title!:string;
  addForm!: boolean;

  constructor(private jobsDataService: JobsDataService, 
              private http: HttpClient,
              private adminService: AdminService){}

  ngOnInit(): void {
    this.jobs = this.jobsDataService.getAll();
    this.title = "Agregar trabajo";
    this.addForm = true;
    this.job = {
      id: 0,
      work_name: "",
      work_description: "",
      client_name: "",
      work_id: 0,
      work_status: "",
      area: "",
      manager: ""
    }
  }

  add(job: Job): void{
    this.jobsDataService.setManager(job);
    this.http.post<Job>(URL, job)
             .pipe(finalize(() => this.ngOnInit()))    
             .subscribe( response => console.log(response));
  }

  delete(id: number): void{
    this.http.delete<Job>(URL + "/" + id)
             .pipe(finalize(() => this.ngOnInit()))
             .subscribe(response => console.log(response));
  }

  put1stStep(job: Job): void{
    this.title = "Modificar trabajo";
    this.job = job;
    this.addForm = false;
  }

  put(job: Job): void{
    this.jobsDataService.setManager(job);
    let urlPut = URL + "/" + this.job.id;
    this.http.put<Job>(urlPut, job)
             .pipe(finalize(() => this.ngOnInit()))    
             .subscribe( response => console.log(response));
  }

  putCancel(msj: string): void{
    console.log(msj);
    this.ngOnInit();
  }

  checkLoggedIn(): boolean{
    return this.adminService.checkLoggedIn();
  }
}
