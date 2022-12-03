import { Component, OnInit } from '@angular/core';
import { JobsDataService } from '../jobs-data.service';
import { Job } from './job';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})

export class JobsListComponent implements OnInit{

  jobs: Job[] = [];

  constructor(private jobsDataService: JobsDataService){}

  ngOnInit(): void {
      this.getJobs();
  }

  getJobs(){
    this.jobsDataService.getAll().subscribe(data => this.jobs = data);
  }

  put(id: number){
    this.jobsDataService.put(id);
  }

  delete(id: number){
    this.jobsDataService.delete(id);
  }
}
