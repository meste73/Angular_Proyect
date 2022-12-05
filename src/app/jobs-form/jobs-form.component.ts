import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Job } from '../jobs-list/job';


@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.scss']
})


export class JobsFormComponent{
  
  @Output() add:EventEmitter<Job> = new EventEmitter<Job>();
  @Output() put:EventEmitter<Job> = new EventEmitter<Job>();
  @Input() addForm!:boolean;
  @Input() putForm!:boolean;

  work_name!: string;
  work_description!: string;
  client_name!: string;
  work_id!: number;
  work_status!: string;
  area!: string;
  send: boolean = false;

  constructor(){
    
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
