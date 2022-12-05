import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(){}

  modify(job: Job){
    this.put1stStep.emit(job);
  }

  deleteJob(id: number){
    this.delete.emit(id);
  }
}
