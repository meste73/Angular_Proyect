import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { JobsDataService } from '../../services/jobs-data.service';
import { Job } from '../../interfaces/job';
import { LoginService } from '../../services/login.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/services/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { JobsFormComponent } from './jobs-form/jobs-form.component';

const URL = "https://62b613cd6999cce2e8feb474.mockapi.io/jobs";

@Component({
  selector: 'app-garage-jobs',
  templateUrl: './garage-jobs.component.html',
  styleUrls: ['./garage-jobs.component.scss']
})

export class GarageJobsComponent implements OnInit, CanActivate {

  job!:Job;
  loading!: boolean;
  displayedColumns: string[] = ['work_name', 'work_description', 'client_name', 'work_id', 'work_status', 'area', 'manager', 'modify', 'delete'];
  dataSource: MatTableDataSource<Job>;

  constructor(private jobsDataService: JobsDataService, 
              private http: HttpClient,
              private loginService: LoginService,
              private router: Router,
              private spinnerService: SpinnerService,
              private dialog: MatDialog){
                this.dataSource = new MatTableDataSource();
                this.spinnerService._loading.subscribe(data=> this.loading = data);
              }
  
  ngOnInit(): void {
    this.getJobs();
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkLoggedIn();
  }
    
  getJobs(): void{
    this.spinnerService.setLoading(true);
    this.jobsDataService.getAll().pipe(finalize(()=>{
      this.spinnerService.setLoading(false);
    })).subscribe(data=>{
      this.dataSource.data = data;
    });
  }

  delete(id: number): void{
    this.http.delete<Job>(URL + "/" + id)
             .pipe(finalize(() => this.ngOnInit()))
             .subscribe(response => console.log(response));
  }

  checkLoggedIn(): boolean{
    if(!this.loginService.checkLoggedIn())
      this.router.navigate(['login']);
    return true;
  }

  checkAdmin(): boolean{
    return this.loginService.checkAdmin()
  }

  addEditJob(status: boolean, id: number): void{
    if(status)
      this.addJob(status);
    else{
      let job: Job;
      this.jobsDataService.getJob(id).pipe(finalize(()=> this.editJob(status, job))).subscribe(data => job = data);
    }
  }

  addJob(status: boolean){
    const dialogRef = this.dialog.open(JobsFormComponent, {
      width: '500px',
      disableClose: true,
      data: {status: status}
    }).afterClosed().subscribe(data => {
      this.ngOnInit();
    });
  }

  editJob(status: boolean, job: Job){
    console.log(job);
    const dialogRef = this.dialog.open(JobsFormComponent, {
      width: '500px',
      disableClose: true,
      data: {status: status,
             job: job}
    }).afterClosed().subscribe(data => {
      this.ngOnInit();
    });
  }
}
