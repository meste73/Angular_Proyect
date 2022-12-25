import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-garage-login',
  templateUrl: './garage-login.component.html',
  styleUrls: ['./garage-login.component.scss']
})
export class GarageLoginComponent {

  user!: string;
  password!: string;

  constructor(private loginService: LoginService,
              private router:Router){}

  login():void{
    this.loginService.login(this.user, this.password);
  }

  checkLoggedIn(): boolean{
    if(this.loginService.checkLoggedIn())
      this.router.navigate(['/']);
    return false;
  }
}
