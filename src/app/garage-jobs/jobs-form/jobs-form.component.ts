import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Job } from '../jobs-list/job';


@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.scss']
})


export class JobsFormComponent implements OnInit{
  
  @Output() add:EventEmitter<Job> = new EventEmitter<Job>();
  @Output() put:EventEmitter<Job> = new EventEmitter<Job>();
  @Output() putCancel:EventEmitter<string> = new EventEmitter<string>();
  @Input() addForm!:boolean;
  @Input() title!:string;
  @Input() job!:Job;

  work_name!: string;
  work_description!: string;
  client_name!: string;
  work_id!: number;
  work_status!: string;
  area!: string;

  constructor(){}

  ngOnInit(): void {
    this.work_name = this.job.work_name;
    this.work_description = this.job.work_description;
    this.client_name = this.job.client_name;
    this.work_id = this.job.work_id;
    this.work_status = this.job.work_status;
    this.area = this.job.area;
  }

  sendJob(){
    if(this.addForm)
      this.addJob();
    else
      this.putJob();
  }

  addJob(){
    let job: Job = {
      id: 0,
      work_name: this.work_name,
      work_description: this.work_description,
      client_name: this.client_name,
      work_id: this.work_id,
      work_status: this.work_status,
      area: this.area,
      manager: ''
    }
    console.log(job);
    this.add.emit(job);
  }

  putJob(){
    let job: Job = {
      id: 0,
      work_name: this.work_name,
      work_description: this.work_description,
      client_name: this.client_name,
      work_id: this.work_id,
      work_status: this.work_status,
      area: this.area,
      manager: ''
    }
    this.put.emit(job);
  }

  cancelModify(){
    console.log("form");
    this.putCancel.emit("Modificacion cancelada");
  }
}
