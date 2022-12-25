import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Mestelan Competicion';

  constructor(private loginService: LoginService){};

  checkLoggedIn(): boolean{
    return this.loginService.checkLoggedIn();
  }

  logout(){
    this.loginService.logout();
  }
}
