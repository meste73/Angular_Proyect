import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-garage-login',
  templateUrl: './garage-login.component.html',
  styleUrls: ['./garage-login.component.scss']
})
export class GarageLoginComponent {

  user!: string;
  password!: string;
  form: FormGroup;
  loading!: boolean;

  constructor(private loginService: LoginService,
              private spinnerService: SpinnerService,
              private router:Router,
              private fb: FormBuilder){
    this.form = fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    }); 
    this.spinnerService._loading.subscribe(data => this.loading = data);           
  }

  login():void{
    this.loginService.login(this.form.value.user, this.form.value.password);
  }

  checkLoggedIn(): boolean{
    if(this.loginService.checkLoggedIn())
      this.router.navigate(['/']);
    return false;
  }
}
