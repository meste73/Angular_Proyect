import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';
import { JobsDataService } from 'src/app/services/jobs-data.service';
import { Job } from '../../../interfaces/job';

const URL = "https://62b613cd6999cce2e8feb474.mockapi.io/jobs";

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.scss']
})


export class JobsFormComponent implements OnInit{

  form: FormGroup;
  areas: string[] = ['Cajas de cambios',
                     'Torneria'];
  btnTitle!: string;

  constructor(private jobsDataService: JobsDataService,
              private fb: FormBuilder,
              private http: HttpClient,
              private dialogRef: MatDialogRef<JobsFormComponent>,
              private _snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: {status: boolean, job: Job}){
    this.form = fb.group({
      work_name: ['', Validators.required],
      work_description: ['', Validators.required],
      client_name: ['', Validators.required],
      work_id: ['', Validators.required],
      work_status: ['', Validators.required],
      area: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(){
    if(this.data.status)
      this.btnTitle = "Agregar";
    else{
      this.btnTitle = "Modificar";
      this.updateForm();
    }
  }

  sendJob(): void{
    if(this.form.valid){
      if(this.data.status)
        this.add();
      else
        this.put();
    }
  }

  add(): void{
    let job: Job = this.createJob();
    this.http.post<Job>(URL, job)
             .pipe(finalize(() => {
              this.dialogRef.close();
             }))
             .subscribe( response => console.log(response));
  }

  put(): void{
    let job: Job = this.createJob();
    let urlPut = URL + "/" + this.data.job.id;
    this.http.put<Job>(urlPut, job)
             .pipe(finalize(() => {
              this.dialogRef.close();
             }))    
             .subscribe( response => console.log(response));
  }

  cancel(): void{
    this.dialogRef.close();
  }

  updateForm(): void{
    this.form.setValue({
      work_name : this.data.job.work_name,
      work_description : this.data.job.work_description,
      client_name : this.data.job.client_name,
      work_id : this.data.job.work_id,
      work_status : this.data.job.work_status,
      area : this.data.job.area
    })
  }

  createJob(): Job{
    let job: Job = {
      id: 0,
      work_name: this.form.value.work_name,
      work_description: this.form.value.work_description,
      client_name: this.form.value.client_name,
      work_id: this.form.value.work_id,
      work_status: this.form.value.work_status,
      area: this.form.value.area,
      manager: ''
    }
    this.jobsDataService.setManager(job);
    return job;
  }

  getErrorMsj(): string{
    return "Campo requerido";
  }

  private showError(){
    this._snackBar.open("Ingrese todos los datos", 'close',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
