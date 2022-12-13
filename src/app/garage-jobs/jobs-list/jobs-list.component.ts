import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/admin.service';
import { Job } from './job';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})

export class JobsListComponent{

  @Input() jobs!: Observable<Job[]>;
  @Output() delete:EventEmitter<number> = new EventEmitter<number>();
  @Output() put1stStep:EventEmitter<Job> = new EventEmitter<Job>();
  @Output() job:EventEmitter<Job> = new EventEmitter<Job>();

  constructor(private adminService: AdminService){}

  modify(job: Job){
    this.put1stStep.emit(job);
    this.job.emit(job);
  }

  deleteJob(id: number){
    this.delete.emit(id);
  }

  showInfo(msj: string){
    alert(msj);
  }

  checkLoggedIn(){
    return this.adminService.checkLoggedIn();
  }
}