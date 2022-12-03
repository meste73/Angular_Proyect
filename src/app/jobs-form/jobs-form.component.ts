import { Component, EventEmitter, Output } from '@angular/core';
import { JobsDataService } from '../jobs-data.service';
import { Job } from '../jobs-list/job';


@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.scss']
})

export class JobsFormComponent{

  work_name!: string;
  work_description!: string;
  client_name!: string;
  work_id!: number;
  work_status!: string;
  area!: string;
  send: boolean = false;

  constructor(private jobsDataService: JobsDataService){}

  add(){
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
    this.jobsDataService.post(job);
  }

  check(){
    if(this.work_name &&
      this.work_description &&
      this.client_name &&
      this.work_id &&
      this.work_status &&
      this.area){
       this.send = true; 
   } else {
     alert("Ingrese los valores");
   }
  }
}
