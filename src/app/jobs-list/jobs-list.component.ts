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

  constructor(private jobsDataService: JobsDataService){

  }

  ngOnInit(): void {
      this.jobsDataService.getAll().subscribe(jobs => this.jobs = jobs)
  }
}
