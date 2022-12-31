import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../../../services/login.service';
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

  constructor(private loginService: LoginService){}

  modify(job: Job): void{
    this.put1stStep.emit(job);
    this.job.emit(job);
  }

  deleteJob(id: number): void{
    this.delete.emit(id);
  }

  showInfo(msj: string): void{
    alert(msj);
  }

  checkLoggedIn(): boolean{
    return this.loginService.checkLoggedIn();
  }

  checkAdmin(): boolean{
    return this.loginService.checkAdmin()
  }
}
