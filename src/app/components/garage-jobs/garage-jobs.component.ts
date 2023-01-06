import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { JobsDataService } from '../../services/jobs-data.service';
import { Job } from '../../interfaces/job';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

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

  displayedColumns: string[] = ['work_name', 'work_description', 'client_name', 'work_id', 'work_status', 'area', 'manager', 'modify', 'delete'];
  dataSource: MatTableDataSource<Job>;

  constructor(private jobsDataService: JobsDataService, 
              private http: HttpClient,
              private loginService: LoginService,
              private router: Router){
                this.dataSource = new MatTableDataSource();
              }

  ngOnInit(): void {
    this.getJobs();
    this.createEmptyJob();
    this.title = "Agregar trabajo";
    this.addForm = true;
  }

  getJobs(): void{
    this.jobsDataService.getAll().subscribe(data=>{
      this.dataSource.data = data;
    });
  }

  createEmptyJob(): void{
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

  modify(job: Job): void{
    this.put1stStep(job);
    this.job = job;
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

  showInfo(msj: string): void{
    alert(msj);
  }

  checkLoggedIn(): boolean{
    if(!this.loginService.checkLoggedIn())
      this.router.navigate(['login']);
    return true;
  }

  checkAdmin(): boolean{
    return this.loginService.checkAdmin()
  }
}
